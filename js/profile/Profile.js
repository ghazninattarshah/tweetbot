/**
 * Filename : Profile.js
 * Author   : Ghazni Nattarshah
 * Date     : DEC 16, 2014 
 */
'use strict';


/**
 * Model object to hold Profile object
 */
var Profile = function () {

    var name, age, phone, email, address, photo;
    
    return {

        setName : function (name) {
            this.name = name;
        },
        
        setAge : function (age) {
            this.age = age;
        },

        setPhone : function (phone) {
            this.phone = phone;  
        },
        
        setEmail : function (email) {
            this.email = email;
        },
        
        getName : function () {
            return this.name;
        },
        
        getAge : function () {
            return this.age;
        },

        getPhone : function () {
            return this.phone;  
        },
        
        getEmail : function () {
            return this.email;
        },

        setAddress : function (address) {
            this.address = address;
        },

        getAddress : function () {
            return this.address;
        },

        setPhoto : function (photo) {
            this.photo = photo;
        },

        getPhoto : function() {
            return this.photo;
        }
    }
};

/**
 * Converts the Profile JSON to object.
 */
Profile.parseJson = function (profileString) {

    var profileJson = JSON.parse(profileString);
    var profile = new Profile();

    if (profileJson) {

        profile.setName(safeValue(profileJson.name));
        profile.setAge(safeValue(profileJson.age));
        profile.setPhone(safeValue(profileJson.phone));
        profile.setEmail(safeValue(profileJson.email));
        profile.setAddress(safeValue(profileJson.address));
        profile.setPhoto(safeValue(profileJson.photo));
    }
    return profile;
};

/*
 * Overided toJson() function.
 */
Profile.prototype.toJson = function () {

    return {

        __type : 'Profile',

        name  : this.name,
        age   : this.age,
        phone : this.phone,
        email : this.email,
        address : this.address,
        photo : this.photo
    };
};

/**
 * Overrided toString() method in Profile prototype; now it prints the profile object.
 */
Profile.prototype.toString = function () {

    return "[ " + this.name +
           ", " + this.age +
           ", " + this.phone +
           ", " + this.email + "]";
};
