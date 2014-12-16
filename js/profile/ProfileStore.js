'use strict';

/**
 * Helper method used to get the profile store from local storage.
 */
var getProfileStore = function () {

    var profileStore = getLocalStore(PROFILE_STORE);
    var profile = Profile.parseJson(profileStore);
    return (profile === null) ? new Profile() : profile;
};

/**
 * Save the profile in local storage.
 */
var saveProfile = function () {

    var profile = new Profile();

    profile.setName($('profileName').value);
    profile.setAge($('profileAge').value);
    profile.setPhone($('profilePhone').value);
    profile.setEmail($('profileEmail').value);
    profile.setAddress($('profileAddress').value);
    profile.setPhoto($('previewImg').src);

    saveStore(PROFILE_STORE, profile);
};

/**
 * Reads the profile from the storage and populate it to the UI form.
 */
var loadProfile = function () {

    var profile = getProfileStore();

    $('profileName').value    = safeValue(profile.getName());
    $('profileAge').value     = safeValue(profile.getAge());
    $('profilePhone').value   = safeValue(profile.getPhone());
    $('profileEmail').value   = safeValue(profile.getEmail());
    $('profileAddress').value = safeValue(profile.getAddress());
    
    var dataUrl = safeValue(profile.getPhoto());
    $('previewImg').src = dataUrl === null ? "styles/images/no-image.png" : dataUrl;
};
