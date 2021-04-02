function colorChecks(handler) {
    let type01 = "01";
    let tint = "Regular";
    let color;
    switch (true) {
        //case (handler.itemNameIncludes("lasersword")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemLaserSword").toLowerCase()):
            color = "Blue";
            break;
        default:
            color = "White";
    }
    let fireColor = "pass";

    switch (true) {
        case (handler.itemColorIncludes("white")):
            type01 = "01";
            tint = "Regular";
            color = "White";
            break;
        case (handler.itemColorIncludes("purple")):
            type01 = "Fire";
            switch (true) {
                //case (handler.itemNameIncludes("laser", "sword")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemLaserSword").toLowerCase()):
                    tint = "Regular";
                    break;
                default:
                    tint = "Dark";
                    break;
            }
            color = "Purple";
            fireColor = 0x8B00C0;
            break;
        case (handler.itemColorIncludes("blue")):
            type01 = "Fire";
            tint = "Regular";
            color = "Blue";
            fireColor = 0x008FC0;
            break;
        case (handler.itemColorIncludes("green")):
            type01 = "Fire";
            tint = "Regular";
            color = "Green";
            fireColor = 0x60EA01;
            break;
        case (handler.itemColorIncludes("orange")):
            type01 = "Fire";
            tint = "Regular";
            color = "Orange";
            fireColor = 0xF18A07;
            break;
        case (handler.itemColorIncludes("pink")):
            type01 = "Fire";
            tint = "Regular";
            color = "Pink";
            fireColor = 0xD2049A;
            break;
        case (handler.itemColorIncludes("dark red")):
            type01 = "Fire";
            tint = "Dark";
            color = "Red";
            fireColor = 0x610101;
            break;
        case (handler.itemColorIncludes("red")):
            type01 = "Fire";
            tint = "Regular";
            color = "Red";
            fireColor = 0xD20404;
            break;
        case (handler.itemColorIncludes("yellow")):
            type01 = "Fire";
            tint = "Regular";
            color = "Yellow";
            fireColor = 0xCFD204;
            break;
    }
    return { type01, tint, color, fireColor };
}

let bloodyHitStutter =
    [{
        filterType: "images",
        filterId: "BloodyHitStutter",
        time: 0,
        nbImage: 2,
        alphaImg: 1.0,
        alphaChr: 0.0,
        autoDestroy: true,
        blend: 4,
        ampX: 0.03,
        ampY: 0.03,
        zOrder: 20,
        animated:
        {
            time:
            {
                active: true,
                speed: 0.070,
                animType: "move",
                loopDuration: 200,
                loops: 2
            },
            anchorX:
            {
                animType: "chaoticOscillation",
                loopDuration: 100,
                val1: 0.40,
                val2: 0.60,
                loops: 4
            }
        }
    },
    {
        filterType: "splash",
        filterId: "BloodSplat",
        rank: 5,
        color: 0x990505,
        padding: 80,
        time: Math.random() * 1000,
        seed: Math.random(),
        splashFactor: 1,
        spread: 0.4,
        blend: 1,
        dimX: 1,
        dimY: 1,
        cut: false,
        textureAlphaBlend: true,
        anchorX: 0.32 + (Math.random() * 0.36),
        anchorY: 0.32 + (Math.random() * 0.36)
    }];

let bloodSplat =
    [{
        filterType: "splash",
        filterId: "BloodSplat",
        rank: 5,
        color: 0x990505,
        padding: 80,
        time: Math.random() * 1000,
        seed: Math.random(),
        splashFactor: 1,
        spread: 0.4,
        blend: 1,
        dimX: 1,
        dimY: 1,
        cut: false,
        textureAlphaBlend: true,
        anchorX: 0.32 + (Math.random() * 0.36),
        anchorY: 0.32 + (Math.random() * 0.36)
    }];

let hitStutter =
    [{
        filterType: "images",
        filterId: "HitStutter",
        time: 0,
        nbImage: 2,
        alphaImg: 1.0,
        alphaChr: 0.0,
        autoDestroy: true,
        blend: 4,
        ampX: 0.03,
        ampY: 0.03,
        zOrder: 20,
        animated:
        {
            time:
            {
                active: true,
                speed: 0.070,
                animType: "move",
                loopDuration: 200,
                loops: 2
            },
            anchorX:
            {
                animType: "chaoticOscillation",
                loopDuration: 100,
                val1: 0.40,
                val2: 0.60,
                loops: 4
            }
        }
    }];

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function meleeWeapons(handler) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let path00 = moduleIncludes("jb2a_patreon") === true ? `jb2a_patreon` : `JB2A_DnD5e`;

    let { type01, tint, color, fireColor } = colorChecks(handler);

    //console.log(color);

    let burn =
        [{
            filterType: "xfire",
            filterId: "meleeBurn",
            autoDestroy: true,
            time: 0,
            color: fireColor,
            blend: 1,
            amplitude: 1,
            dispersion: 0,
            chromatic: false,
            scaleX: 1,
            scaleY: 1,
            inlay: false,
            animated:
            {
                time:
                {
                    loopDuration: 500,
                    loops: 3,
                    active: true,
                    speed: -0.0015,
                    animType: "move"
                }
            }
        }];

    // delay before activating the Token Magic FX Macros, change inside the switch cases to adjust the timing
    let tmDelay = 1000;
    // delay before deleting Token Magic FX if needed, change inside switch cases to adjust the deletion
    let tmKill = 1000;
    // calls a Token Magic FX macro defined above, change inside the switch cases to desired TMFX
    let tmMacro = "HitStutter";

    let item01 = "Dagger02";
    switch (true) {
        //case (handler.itemNameIncludes("rapier")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemRapier").toLowerCase()):
            item01 = "Rapier01";
            tmDelay = 900;
            tmKill = 1600;
            tmMacro = bloodSplat;
            break;
        //case (handler.itemNameIncludes("greatsword")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemGreatsword").toLowerCase()):
            item01 = "GreatSword01";
            tmDelay = 1600;
            tmKill = 1600;
            tmMacro = bloodyHitStutter;
            break;
        //case (handler.itemNameIncludes("greatclub")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemGreatclub").toLowerCase()):
            item01 = "GreatClub01";
            tmDelay = 1100;
            tmKill = 1600;
            tmMacro = bloodyHitStutter;
            break;
        //case (handler.itemNameIncludes("greataxe")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemGreataxe").toLowerCase()):
        //case (handler.itemNameIncludes("battleaxe")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemBattleaxe").toLowerCase()):
            item01 = "GreatAxe01";
            tmDelay = 1600;
            tmKill = 1600;
            tmMacro = bloodyHitStutter;
            break;
        //case (handler.itemNameIncludes("mace")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemMace").toLowerCase()):
            item01 = "Mace01";
            tmDelay = 1100;
            tmKill = 1600;
            tmMacro = bloodyHitStutter;
            break;
        //case (handler.itemNameIncludes("lasersword")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemLaserSword").toLowerCase()):
            item01 = "LaserSword01";
            type01 = "01";
            tmDelay = 1300;
            tmKill = 1600;
            tmMacro = bloodSplat;
            break;
        //case (handler.itemNameIncludes("sword")):
        //case (handler.itemNameIncludes("scimitar")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemSword").toLowerCase()):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemScimitar").toLowerCase()):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemLongsword").toLowerCase()):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemShortsword").toLowerCase()):
            item01 = "Sword01";
            tmDelay = 1300;
            tmKill = 1600;
            tmMacro = bloodSplat;
            break;
        //case (handler.itemNameIncludes("maul")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemMaul").toLowerCase()):
            item01 = "Maul01";
            tmDelay = 1900;
            tmKill = 1600;
            tmMacro = bloodyHitStutter;
            break;
        //case (handler.itemNameIncludes("1 handed slashing")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.item1HS").toLowerCase()):
            item01 = "DmgSlashing";
            color = "Yellow_1Handed";
            break;
        //case (handler.itemNameIncludes("2 handed slashing")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.item2HS").toLowerCase()):
            item01 = "DmgSlashing";
            color = "Yellow_2Handed";
            tmDelay = 500;
            tmKill = 750;
            tmMacro = hitStutter;
            break;
        //case (handler.itemNameIncludes("1 handed piercing")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.item1HP").toLowerCase()):
            item01 = "DmgPiercing";
            color = "Yellow_1Handed";
            break;
        //case (handler.itemNameIncludes("2 handed piercing")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.item2HP").toLowerCase()):
            item01 = "DmgPiercing";
            color = "Yellow_2Handed";
            tmDelay = 200;
            tmKill = 500;
            tmMacro = hitStutter;
            break;
        //case (handler.itemNameIncludes("1 handed bludgeoning")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.item1HB").toLowerCase()):
            item01 = "DmgBludgeoning";
            color = "Yellow_1Handed";
            tmDelay = 500;
            tmKill = 750;
            tmMacro = hitStutter;
            break;
        case (handler.itemNameIncludes("2 handed bludgeoning")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.item2HB").toLowerCase()):
            item01 = "DmgBludgeoning";
            color = "Yellow_2Handed";
            tmDelay = 500;
            tmKill = 750;
            tmMacro = hitStutter;
            break;
    }

    async function cast() {
        var arrayLength = handler.allTargets.length;
        //console.log(arrayLength);
        var targetCheck = handler.targetAssistant.length;
        let noTargetAnim = `modules/automated-jb2a-animations/Animations/No_Target_400x400.webm`;
        let myToken = handler.actorToken;
        let targetTrainer =
        {
            file: noTargetAnim,
            position: myToken.center,
            anchor: {
                x: 0.5,
                y: 0.5
            },
            angle: 0,
            scale: {
                x: 0.25,
                y: 0.25
            }
        }

        switch (true) {
            case ((targetCheck === 0) && (game.settings.get("automated-jb2a-animations", "targetingAssist"))):
                canvas.fxmaster.playVideo(targetTrainer);
                game.socket.emit('module.fxmaster', targetTrainer);
        }

        /*
        UrlExists(anim, function (status) {
            if (status === 404) {
                anim = `${file}/GreatAxe01_Fire_Regular_Red_800x600.webm`;
                console.log("failure");
            }
        });
        */
        for (var i = 0; i < arrayLength; i++) {
            let target = handler.allTargets[i];

            let idsSearch = handler.actorToken.actor.data.items.filter(item => item.type === `feat`).map(item => item.name);

            function actorIncludes(test) {
                if (idsSearch.includes(test)) return true;
            }

            let dsBoom = `modules/${path00}/Library/Generic/Explosion/Explosion_02_Blue_400x400.webm`;
            let dsScale = canvas.scene.data.grid / 400;
            let spellAnim2 =
            {
                file: dsBoom,
                position: target.center,
                anchor: {
                    x: 0.5,
                    y: 0.5
                },
                angle: 0,
                scale: {
                    x: dsScale,
                    y: dsScale
                }
            };

            // Scaled globally, change divisor to increase/decrease size of animation
            let Scale = canvas.scene.data.grid / 175;
            // randomly mirrors animation
            var plusOrMinus = Math.random() < 0.5 ? -1 : 1;

            let file = `modules/${path00}/Library/Generic/Weapon_Attacks/Melee`;

            let anim = `${file}/${item01}_${type01}_${tint}_${color}_800x600.webm`;

            function castSpell(effect) {
                game.user.targets.forEach((i, t) => {
                    canvas.fxmaster.drawSpecialToward(effect, handler.actorToken, t);

                });
            }
            castSpell({
                file: anim,
                anchor: {
                    x: 0.4,
                    y: 0.5,
                },
                speed: 0,
                angle: 0,
                scale: {
                    x: Scale,
                    y: (Scale * plusOrMinus),
                },
            });


            switch (true) {
                case (actorIncludes("Improved Divine Smite")):
                    await wait(tmDelay - 300);
                    canvas.fxmaster.playVideo(spellAnim2);
                    game.socket.emit('module.fxmaster', spellAnim2);
                    if (game.settings.get("automated-jb2a-animations", "tmfx")) {
                        await wait(250);
                        switch (true) {
                            case (fireColor != "pass"):
                                TokenMagic.addUpdateFilters(target, burn);
                                await wait(50);
                                TokenMagic.addUpdateFilters(target, tmMacro);
                                break;
                            default:
                                TokenMagic.addUpdateFilters(target, tmMacro);
                                break;
                        }
                    }
                    break;
                default:
                    await wait(tmDelay - 200);
                    if (handler.animExplode && handler.animOverride) {
                        explodeOnTarget(handler);
                    }
                    if (game.settings.get("automated-jb2a-animations", "tmfx")) {
                        await wait(200);
                        switch (true) {
                            case (fireColor != "pass"):
                                TokenMagic.addFilters(target, burn);
                                await wait(50);
                                TokenMagic.addFilters(target, tmMacro);
                                break;
                            default:
                                TokenMagic.addFilters(target, tmMacro);
                                break;
                        }
                        await wait(250);
                    }
            }
            await wait(tmKill);
            if (game.settings.get("automated-jb2a-animations", "tmfx")) {
                TokenMagic.deleteFilters(target, "BloodSplat");
            }
            // await wait(50);
            // TokenMagic.deleteFilters(target, "meleeBurn");
        }
    }
    cast();
}

export default meleeWeapons;
