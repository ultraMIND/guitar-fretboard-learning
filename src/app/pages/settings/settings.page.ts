import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { AnalyticsService } from '@shared-modules/services/mixpanel/analytics.service';
import { UtilsService } from '@shared-modules/services/utils/utils.service';
import { OpenOrderModalAction, OpenTutorialModalAction } from '@shared-modules/store/user/user.actions';
import { UserState, UserStateModel } from '@shared-modules/store/user/user.state';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';
import {
  PreferencesSetFlatsModeAction,
  PreferencesSetInvertedFretsModeAction,
  PreferencesSetInvertedStringsModeAction,
  PreferencesSetNotationAction,
  PreferencesSetSoundAction,
  PreferencesSetTunningAction,
} from 'src/app/shared/store/preferences/preferences.actions';
import { PreferencesState, PreferencesStateModel } from 'src/app/shared/store/preferences/preferences.state';
import { SettingsState } from './store/settings.state';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsPage implements OnInit, OnDestroy {
  @Select(UserState.getState) userState$: Observable<UserStateModel>;
  @Select(SettingsState.getCustomTunings) customTunnings$: Observable<string[]>;
  destroyed$ = new Subject();
  hideTuning$ = new BehaviorSubject(false);
  settingsForm: FormGroup;
  tunings = [
    'A-E-A-E-A-C#',
    'B-F#-B-F#-B-D#',
    'C-C-G-C-E-G',
    'C-E-G-C-E-G',
    'C-F-C-F-A-C',
    'C-G-C-G-C-E',
    'C-G-D-G-B-D',
    'C#-F#-C#-F#-G#-C#',
    'C#-G#-C#-F-G#-C#',
    'D-A-D-F#-A-D',
    'D-A-D-G-A-D',
    'D-A-D-G-B-E',
    'D-G-B-D-G-B-D',
    'D-G-D-G-B-D',
    'E-A-C#-E-A-C#',
    'E-A-C#-E-A-E',
    'E-A-E-A-C#-E',
    'E-B-E-G#-B-E',
    'F-A-C-F-C-F',
    'F-F-C-F-A-C',
    'F#-A#-C#-F#-C#-F#',
    'F#-B-D#-F#-B-D#',
    'G-B-D-G-B-D',
    'G-B-D-G-B-D',
    'G-G-D-G-B-D',
  ];
  preferences: PreferencesStateModel;

  get isLeftHanded() {
    return this.preferences?.invertedStrings || this.preferences?.invertedFrets;
  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly modalController: ModalController,
    private readonly store: Store,
    private readonly navCtrl: NavController,
    private readonly cd: ChangeDetectorRef,
    private readonly analyticsService: AnalyticsService,
    public readonly utils: UtilsService,
  ) {
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  ngOnInit() {
    this.preferences = this.store.selectSnapshot<PreferencesStateModel>(PreferencesState.getState);
    this.setForm();
    this.listenToPreferences();
  }

  setForm() {
    this.settingsForm = this.fb.group({
      invertedStrings: [this.preferences.invertedStrings, [Validators.required]],
      invertedFrets: [this.preferences.invertedFrets, [Validators.required]],
      activateSound: [this.preferences.activateSound, [Validators.required]],
      useFlats: [this.preferences.useFlats, [Validators.required]],
      tuning: [this.preferences.tuning, [Validators.required]],
      notation: [this.preferences.notation, [Validators.required]],
    });
    this.setFormListeners();
  }

  listenToPreferences() {
    this.store.select(PreferencesState.getState).pipe(
      tap(pref => {
        this.preferences = pref;
        this.setForm();
        this.cd.markForCheck();
      }),
      takeUntil(this.destroyed$),
    ).subscribe();
  }

  setFormListeners() {
    this.settingsForm.valueChanges
      .pipe(takeUntil(this.destroyed$), debounceTime(500))
      .subscribe((formValue: PreferencesStateModel) => {
        const preferences = this.store.selectSnapshot<PreferencesStateModel>(
          PreferencesState.getState,
        );

        if (formValue.invertedStrings !== preferences.invertedStrings) {
          this.store.dispatch(
            new PreferencesSetInvertedStringsModeAction({
              invertedStrings: formValue.invertedStrings,
            }),
          );
          this.refreshTuning();
        }
        if (formValue.invertedFrets !== preferences.invertedFrets) {
          this.store.dispatch(
            new PreferencesSetInvertedFretsModeAction({
              invertedFrets: formValue.invertedFrets,
            }),
          );
          this.refreshTuning();
        }
        if (formValue.useFlats !== preferences.useFlats) {
          this.store.dispatch(
            new PreferencesSetFlatsModeAction({ useFlats: formValue.useFlats }),
          );
          this.refreshTuning();
        }
        if (formValue.notation !== preferences.notation) {
          this.store.dispatch(
            new PreferencesSetNotationAction({ notation: formValue.notation }),
          );
          this.refreshTuning();
        }
        if (formValue.activateSound !== preferences.activateSound) {
          this.store.dispatch(
            new PreferencesSetSoundAction({ activateSound: formValue.activateSound }),
          );
        }
        if (formValue.tuning !== preferences.tuning) {
          this.store.dispatch(
            new PreferencesSetTunningAction({ tuning: formValue.tuning }),
          );
        }
      });
  }

  refreshTuning() {
    this.hideTuning$.next(true);
    requestAnimationFrame(() => this.hideTuning$.next(false));
  }

  goToCustomSettingsPage() {
    this.navCtrl.navigateForward(['settings', 'custom-tuning']);
    this.analyticsService.setCurrentScreen('settings_custom-tuning');
  }

  goToAboutPage() {
    this.navCtrl.navigateForward(['settings', 'about']);
    this.analyticsService.setCurrentScreen('settings_about');
  }

  goToPrivacyPage() {
    this.navCtrl.navigateForward(['settings', 'privacy']);
    this.analyticsService.setCurrentScreen('settings_privacy');
  }

  openOrderModal() {
    this.store.dispatch(new OpenOrderModalAction());
  }

  goToTerms() {
    this.navCtrl.navigateForward(['settings', 'terms-of-use']);
    this.analyticsService.setCurrentScreen('settings_terms-of-use');
  }

  goToRatePage() {
    const appId = 1554316449;
    window.location.href = 'itms-apps://itunes.apple.com/WebObjects/MZStore.woa/wa/viewContentsUserReviews' +
      '?id=' + appId + '&onlyLatestVersion=true&pageNumber=0&sortOrdering=1&type=Purple+Software';
    this.analyticsService.logEvent('settings', 'rateApp');
  }

  goToTwitterFL() {
    UtilsService.openLink('https://twitter.com/LearnFretboard');
  }

  goToTutorial() {
    this.store.dispatch(new OpenTutorialModalAction());
  }
}
