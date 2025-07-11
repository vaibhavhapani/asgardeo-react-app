/**
 * Copyright (c) 2025, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* eslint-disable sort-keys */


const translations = {
  /* |---------------------------------------------------------------| */
  /* |                        Elements                               | */
  /* |---------------------------------------------------------------| */

  //* Buttons */
  'elements.buttons.signIn': 'Sign In',
  'elements.buttons.signOut': 'Sign Out',
  'elements.buttons.signUp': 'Sign Up',
  'elements.buttons.facebook': 'Continue with Facebook',
  'elements.buttons.google': 'Continue with Google',
  'elements.buttons.github': 'Continue with GitHub',
  'elements.buttons.microsoft': 'Continue with Microsoft',
  'elements.buttons.linkedin': 'Continue with LinkedIn',
  'elements.buttons.ethereum': 'Continue with Sign In Ethereum',
  'elements.buttons.multi.option': 'Continue with {connection}',
  'elements.buttons.social': 'Continue with {connection}',

  /* Fields */
  'elements.fields.placeholder': 'Enter your {field}',

  /* |---------------------------------------------------------------| */
  /* |                        Widgets                                | */
  /* |---------------------------------------------------------------| */

  /* Base Sign In */
  'signin.title': 'Sign In',
  'signin.subtitle': 'Enter your credentials to continue.',

  /* Base Sign Up */
  'signup.title': 'Sign Up',
  'signup.subtitle': 'Create a new account to get started.',

  /* Email OTP */
  'email.otp.title': 'OTP Verification',
  'email.otp.subtitle': 'Enter the code sent to your email address.',
  'email.otp.submit.button': 'Continue',

  /* Identifier First */
  'identifier.first.title': 'Sign In',
  'identifier.first.subtitle': 'Enter your username or email address.',
  'identifier.first.submit.button': 'Continue',

  /* SMS OTP */
  'sms.otp.title': 'OTP Verification',
  'sms.otp.subtitle': 'Enter the code sent to your phone number.',
  'sms.otp.submit.button': 'Continue',

  /* TOTP */
  'totp.title': 'Verify Your Identity',
  'totp.subtitle': 'Enter the code from your authenticator app.',
  'totp.submit.button': 'Continue',

  /* Username Password */
  'username.password.submit.button': 'Continue',
  'username.password.title': 'Sign In',
  'username.password.subtitle': 'Enter your username and password to continue.',

  /* |---------------------------------------------------------------| */
  /* |                     Organization Switcher                     | */
  /* |---------------------------------------------------------------| */

  'organization.switcher.select.organization': 'Select Organization',
  'organization.switcher.switch.organization': 'Switch Organization',
  'organization.switcher.loading.organizations': 'Loading organizations...',
  'organization.switcher.members': 'members',
  'organization.switcher.member': 'member',
  'organization.switcher.create.organization': 'Create Organization',
  'organization.switcher.manage.organizations': 'Manage Organizations',
  'organization.switcher.manage.button': 'Manage',
  'organization.switcher.organizations.title': 'Organizations',
  'organization.switcher.switch.button': 'Switch',
  'organization.switcher.no.access': 'No Access',
  'organization.switcher.status.label': 'Status:',
  'organization.switcher.showing.count': 'Showing {showing} of {total} organizations',
  'organization.switcher.refresh.button': 'Refresh',
  'organization.switcher.load.more': 'Load More Organizations',
  'organization.switcher.loading.more': 'Loading...',
  'organization.switcher.no.organizations': 'No organizations found',
  'organization.switcher.error.prefix': 'Error:',
  'organization.profile.title': 'Organization Profile',
  'organization.profile.loading': 'Loading organization...',
  'organization.profile.error': 'Failed to load organization',

  'organization.create.title': 'Create Organization',
  'organization.create.name.label': 'Organization Name',
  'organization.create.name.placeholder': 'Enter organization name',
  'organization.create.handle.label': 'Organization Handle',
  'organization.create.handle.placeholder': 'my-organization',
  'organization.create.description.label': 'Description',
  'organization.create.description.placeholder': 'Enter organization description',
  'organization.create.button': 'Create Organization',
  'organization.create.creating': 'Creating...',
  'organization.create.cancel': 'Cancel',

  /* |---------------------------------------------------------------| */
  /* |                        Messages                               | */
  /* |---------------------------------------------------------------| */

  'messages.loading': 'Loading...',

  /* |---------------------------------------------------------------| */
  /* |                        Errors                                 | */
  /* |---------------------------------------------------------------| */

  'errors.title': 'Error',
  'errors.sign.in.initialization': 'An error occurred while initializing. Please try again later.',
  'errors.sign.in.flow.failure': 'An error occurred during the sign-in flow. Please try again later.',
  'errors.sign.in.flow.completion.failure':
    'An error occurred while completing the sign-in flow. Please try again later.',
  'errors.sign.in.flow.passkeys.failure': 'An error occurred while signing in with passkeys. Please try again later.',
  'errors.sign.in.flow.passkeys.completion.failure':
    'An error occurred while completing the passkeys sign-in flow. Please try again later.',
};

//****************************************************** HINDI  ************************************
// const translations = {
//   /* |---------------------------------------------------------------| */
//   /* |                        Elements                               | */
//   /* |---------------------------------------------------------------| */

//   //* Buttons */
//   'elements.buttons.signIn': 'साइन इन करें',
//   'elements.buttons.signOut': 'साइन आउट करें',
//   'elements.buttons.signUp': 'साइन अप करें',
//   'elements.buttons.facebook': 'Facebook से जारी रखें',
//   'elements.buttons.google': 'Google से जारी रखें',
//   'elements.buttons.github': 'GitHub से जारी रखें',
//   'elements.buttons.microsoft': 'Microsoft से जारी रखें',
//   'elements.buttons.linkedin': 'LinkedIn से जारी रखें',
//   'elements.buttons.ethereum': 'Sign In Ethereum से जारी रखें',
//   'elements.buttons.multi.option': '{connection} से जारी रखें',
//   'elements.buttons.social': '{connection} से जारी रखें',

//   /* Fields */
//   'elements.fields.placeholder': 'अपना {field} दर्ज करें',

//   /* |---------------------------------------------------------------| */
//   /* |                        Widgets                                | */
//   /* |---------------------------------------------------------------| */

//   /* Base Sign In */
//   'signin.title': 'साइन इन करें',
//   'signin.subtitle': 'जारी रखने के लिए अपनी साख दर्ज करें।',

//   /* Base Sign Up */
//   'signup.title': 'साइन अप करें',
//   'signup.subtitle': 'शुरू करने के लिए एक नया खाता बनाएं।',

//   /* Email OTP */
//   'email.otp.title': 'ओटीपी सत्यापन',
//   'email.otp.subtitle': 'अपने ईमेल पते पर भेजा गया कोड दर्ज करें।',
//   'email.otp.submit.button': 'जारी रखें',

//   /* Identifier First */
//   'identifier.first.title': 'साइन इन करें',
//   'identifier.first.subtitle': 'अपना उपयोगकर्ता नाम या ईमेल पता दर्ज करें।',
//   'identifier.first.submit.button': 'जारी रखें',

//   /* SMS OTP */
//   'sms.otp.title': 'ओटीपी सत्यापन',
//   'sms.otp.subtitle': 'अपने फ़ोन नंबर पर भेजा गया कोड दर्ज करें।',
//   'sms.otp.submit.button': 'जारी रखें',

//   /* TOTP */
//   'totp.title': 'अपनी पहचान सत्यापित करें',
//   'totp.subtitle': 'अपने प्रमाणीकरण ऐप से कोड दर्ज करें।',
//   'totp.submit.button': 'जारी रखें',

//   /* Username Password */
//   'username.password.submit.button': 'जारी रखें',
//   'username.password.title': 'साइन इन करें',
//   'username.password.subtitle': 'जारी रखने के लिए अपना उपयोगकर्ता नाम और पासवर्ड दर्ज करें।',

//   /* |---------------------------------------------------------------| */
//   /* |                     Organization Switcher                     | */
//   /* |---------------------------------------------------------------| */

//   'organization.switcher.select.organization': 'संगठन चुनें',
//   'organization.switcher.switch.organization': 'संगठन बदलें',
//   'organization.switcher.loading.organizations': 'संगठन लोड हो रहे हैं...',
//   'organization.switcher.members': 'सदस्य',
//   'organization.switcher.member': 'सदस्य',
//   'organization.switcher.create.organization': 'संगठन बनाएं',
//   'organization.switcher.manage.organizations': 'संगठन प्रबंधित करें',
//   'organization.switcher.manage.button': 'प्रबंधित करें',
//   'organization.switcher.organizations.title': 'संगठन',
//   'organization.switcher.switch.button': 'बदलें',
//   'organization.switcher.no.access': 'पहुंच नहीं है',
//   'organization.switcher.status.label': 'स्थिति:',
//   'organization.switcher.showing.count': '{total} में से {showing} संगठन दिखा रहे हैं',
//   'organization.switcher.refresh.button': 'ताज़ा करें',
//   'organization.switcher.load.more': 'और संगठन लोड करें',
//   'organization.switcher.loading.more': 'लोड हो रहा है...',
//   'organization.switcher.no.organizations': 'कोई संगठन नहीं मिला',
//   'organization.switcher.error.prefix': 'त्रुटि:',
//   'organization.profile.title': 'संगठन प्रोफ़ाइल',
//   'organization.profile.loading': 'संगठन लोड हो रहा है...',
//   'organization.profile.error': 'संगठन लोड करने में विफल',

//   'organization.create.title': 'संगठन बनाएं',
//   'organization.create.name.label': 'संगठन का नाम',
//   'organization.create.name.placeholder': 'संगठन का नाम दर्ज करें',
//   'organization.create.handle.label': 'संगठन हैंडल',
//   'organization.create.handle.placeholder': 'mera-sangathan',
//   'organization.create.description.label': 'विवरण',
//   'organization.create.description.placeholder': 'संगठन का विवरण दर्ज करें',
//   'organization.create.button': 'संगठन बनाएं',
//   'organization.create.creating': 'बनाया जा रहा है...',
//   'organization.create.cancel': 'रद्द करें',

//   /* |---------------------------------------------------------------| */
//   /* |                        Messages                               | */
//   /* |---------------------------------------------------------------| */

//   'messages.loading': 'लोड हो रहा है...',

//   /* |---------------------------------------------------------------| */
//   /* |                        Errors                                 | */
//   /* |---------------------------------------------------------------| */

//   'errors.title': 'त्रुटि',
//   'errors.sign.in.initialization': 'प्रारंभ करते समय एक त्रुटि हुई। कृपया बाद में पुनः प्रयास करें।',
//   'errors.sign.in.flow.failure': 'साइन-इन प्रक्रिया के दौरान एक त्रुटि हुई। कृपया बाद में पुनः प्रयास करें।',
//   'errors.sign.in.flow.completion.failure': 'साइन-इन प्रक्रिया पूरी करते समय एक त्रुटि हुई। कृपया बाद में पुनः प्रयास करें।',
//   'errors.sign.in.flow.passkeys.failure': 'पासकीज़ के साथ साइन-इन करते समय एक त्रुटि हुई। कृपया बाद में पुनः प्रयास करें।',
//   'errors.sign.in.flow.passkeys.completion.failure': 'पासकी साइन-इन प्रक्रिया पूरी करते समय एक त्रुटि हुई। कृपया बाद में पुनः प्रयास करें।',
// };




//****************************************************** French  ************************************
// const translations = {
//   /* |---------------------------------------------------------------| */
//   /* |                        Elements                               | */
//   /* |---------------------------------------------------------------| */

//   //* Buttons */
//   'elements.buttons.signIn': 'Se connecter',
//   'elements.buttons.signOut': 'Se déconnecter',
//   'elements.buttons.signUp': 'S’inscrire',
//   'elements.buttons.facebook': 'Continuer avec Facebook',
//   'elements.buttons.google': 'Continuer avec Google',
//   'elements.buttons.github': 'Continuer avec GitHub',
//   'elements.buttons.microsoft': 'Continuer avec Microsoft',
//   'elements.buttons.linkedin': 'Continuer avec LinkedIn',
//   'elements.buttons.ethereum': 'Continuer avec Sign In Ethereum',
//   'elements.buttons.multi.option': 'Continuer avec {connection}',
//   'elements.buttons.social': 'Continuer avec {connection}',

//   /* Fields */
//   'elements.fields.placeholder': 'Entrez votre {field}',

//   /* |---------------------------------------------------------------| */
//   /* |                        Widgets                                | */
//   /* |---------------------------------------------------------------| */

//   /* Base Sign In */
//   'signin.title': 'Connexion',
//   'signin.subtitle': 'Entrez vos identifiants pour continuer.',

//   /* Base Sign Up */
//   'signup.title': 'Inscription',
//   'signup.subtitle': 'Créez un nouveau compte pour commencer.',

//   /* Email OTP */
//   'email.otp.title': 'Vérification OTP',
//   'email.otp.subtitle': 'Entrez le code envoyé à votre adresse e-mail.',
//   'email.otp.submit.button': 'Continuer',

//   /* Identifier First */
//   'identifier.first.title': 'Connexion',
//   'identifier.first.subtitle': 'Entrez votre nom d’utilisateur ou adresse e-mail.',
//   'identifier.first.submit.button': 'Continuer',

//   /* SMS OTP */
//   'sms.otp.title': 'Vérification OTP',
//   'sms.otp.subtitle': 'Entrez le code envoyé à votre numéro de téléphone.',
//   'sms.otp.submit.button': 'Continuer',

//   /* TOTP */
//   'totp.title': 'Vérifiez votre identité',
//   'totp.subtitle': 'Entrez le code de votre application d’authentification.',
//   'totp.submit.button': 'Continuer',

//   /* Username Password */
//   'username.password.submit.button': 'Continuer',
//   'username.password.title': 'Connexion',
//   'username.password.subtitle': 'Entrez votre nom d’utilisateur et mot de passe pour continuer.',

//   /* |---------------------------------------------------------------| */
//   /* |                     Organization Switcher                     | */
//   /* |---------------------------------------------------------------| */

//   'organization.switcher.select.organization': 'Sélectionner une organisation',
//   'organization.switcher.switch.organization': 'Changer d’organisation',
//   'organization.switcher.loading.organizations': 'Chargement des organisations...',
//   'organization.switcher.members': 'membres',
//   'organization.switcher.member': 'membre',
//   'organization.switcher.create.organization': 'Créer une organisation',
//   'organization.switcher.manage.organizations': 'Gérer les organisations',
//   'organization.switcher.manage.button': 'Gérer',
//   'organization.switcher.organizations.title': 'Organisations',
//   'organization.switcher.switch.button': 'Changer',
//   'organization.switcher.no.access': 'Aucun accès',
//   'organization.switcher.status.label': 'Statut :',
//   'organization.switcher.showing.count': 'Affichage de {showing} sur {total} organisations',
//   'organization.switcher.refresh.button': 'Rafraîchir',
//   'organization.switcher.load.more': 'Charger plus d’organisations',
//   'organization.switcher.loading.more': 'Chargement...',
//   'organization.switcher.no.organizations': 'Aucune organisation trouvée',
//   'organization.switcher.error.prefix': 'Erreur :',
//   'organization.profile.title': 'Profil de l’organisation',
//   'organization.profile.loading': 'Chargement de l’organisation...',
//   'organization.profile.error': 'Échec du chargement de l’organisation',

//   'organization.create.title': 'Créer une organisation',
//   'organization.create.name.label': 'Nom de l’organisation',
//   'organization.create.name.placeholder': 'Entrez le nom de l’organisation',
//   'organization.create.handle.label': 'Identifiant de l’organisation',
//   'organization.create.handle.placeholder': 'mon-organisation',
//   'organization.create.description.label': 'Description',
//   'organization.create.description.placeholder': 'Entrez la description de l’organisation',
//   'organization.create.button': 'Créer une organisation',
//   'organization.create.creating': 'Création en cours...',
//   'organization.create.cancel': 'Annuler',

//   /* |---------------------------------------------------------------| */
//   /* |                        Messages                               | */
//   /* |---------------------------------------------------------------| */

//   'messages.loading': 'Chargement...',

//   /* |---------------------------------------------------------------| */
//   /* |                        Errors                                 | */
//   /* |---------------------------------------------------------------| */

//   'errors.title': 'Erreur',
//   'errors.sign.in.initialization': 'Une erreur est survenue lors de l’initialisation. Veuillez réessayer plus tard.',
//   'errors.sign.in.flow.failure': 'Une erreur est survenue pendant le processus de connexion. Veuillez réessayer plus tard.',
//   'errors.sign.in.flow.completion.failure': 'Une erreur est survenue lors de la finalisation de la connexion. Veuillez réessayer plus tard.',
//   'errors.sign.in.flow.passkeys.failure': 'Une erreur est survenue lors de la connexion avec des passkeys. Veuillez réessayer plus tard.',
//   'errors.sign.in.flow.passkeys.completion.failure': 'Une erreur est survenue lors de la finalisation de la connexion avec passkeys. Veuillez réessayer plus tard.',
// };



const metadata = {
  localeCode: 'en-US',
  countryCode: 'US',
  languageCode: 'en',
  displayName: 'English (United States)',
  direction: 'ltr',
};

const en_US = {
  metadata,
  translations,
};

export default en_US;