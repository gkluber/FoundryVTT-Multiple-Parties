export const registerSettingsInit = function() {
    /*let user = game.users.current;
    game.settings.register("MultipleParties", "team".concat(user._id), {
        name: "Team Number",
        hint: "Team the player belongs to",
        scope: "world",
        config: false,
        type: Number,
        default: 0
    });*/
}

export const registerSettingsReady = function() {
    let user = game.users.current;
    game.settings.register("MultipleParties", "team".concat(user._id), {
        name: "Team Number",
        hint: "Team the player belongs to",
        scope: "world",
        config: false,
        type: Number,
        default: 0
    });
}
