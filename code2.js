gdjs.LeaderboardSceneCode = {};
gdjs.LeaderboardSceneCode.localVariables = [];
gdjs.LeaderboardSceneCode.idToCallbackMap = new Map();
gdjs.LeaderboardSceneCode.GDGameLeaderboardObjects1= [];
gdjs.LeaderboardSceneCode.GDGameLeaderboardObjects2= [];
gdjs.LeaderboardSceneCode.GDPlayerNameInputObjects1= [];
gdjs.LeaderboardSceneCode.GDPlayerNameInputObjects2= [];
gdjs.LeaderboardSceneCode.GDSubmitButtonObjects1= [];
gdjs.LeaderboardSceneCode.GDSubmitButtonObjects2= [];
gdjs.LeaderboardSceneCode.GDGoldObjects1= [];
gdjs.LeaderboardSceneCode.GDGoldObjects2= [];
gdjs.LeaderboardSceneCode.GDcoinTxtObjects1= [];
gdjs.LeaderboardSceneCode.GDcoinTxtObjects2= [];
gdjs.LeaderboardSceneCode.GDClockObjects1= [];
gdjs.LeaderboardSceneCode.GDClockObjects2= [];
gdjs.LeaderboardSceneCode.GDtimeTxtObjects1= [];
gdjs.LeaderboardSceneCode.GDtimeTxtObjects2= [];
gdjs.LeaderboardSceneCode.GDNewTiledSpriteObjects1= [];
gdjs.LeaderboardSceneCode.GDNewTiledSpriteObjects2= [];
gdjs.LeaderboardSceneCode.GDTransparentPanel_95955Objects1= [];
gdjs.LeaderboardSceneCode.GDTransparentPanel_95955Objects2= [];
gdjs.LeaderboardSceneCode.GDBackToGameButtonObjects1= [];
gdjs.LeaderboardSceneCode.GDBackToGameButtonObjects2= [];


gdjs.LeaderboardSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("coinTxt"), gdjs.LeaderboardSceneCode.GDcoinTxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("timeTxt"), gdjs.LeaderboardSceneCode.GDtimeTxtObjects1);
{gdjs.evtsExt__MousePointerLock__ExitPointerLock.func(runtimeScene, null);
}
{gdjs.evtTools.input.showCursor(runtimeScene);
}
{for(var i = 0, len = gdjs.LeaderboardSceneCode.GDcoinTxtObjects1.length ;i < len;++i) {
    gdjs.LeaderboardSceneCode.GDcoinTxtObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.LeaderboardSceneCode.GDtimeTxtObjects1.length ;i < len;++i) {
    gdjs.LeaderboardSceneCode.GDtimeTxtObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.common.roundTo(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber(), 2)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SubmitButton"), gdjs.LeaderboardSceneCode.GDSubmitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardSceneCode.GDSubmitButtonObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardSceneCode.GDSubmitButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardSceneCode.GDSubmitButtonObjects1[k] = gdjs.LeaderboardSceneCode.GDSubmitButtonObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardSceneCode.GDSubmitButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23558532);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "f339bedc-c8e0-43de-95f8-1b8ee26aa92c", false);
}
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "f339bedc-c8e0-43de-95f8-1b8ee26aa92c", (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() / runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber()) * 1000, "");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackToGameButton"), gdjs.LeaderboardSceneCode.GDBackToGameButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardSceneCode.GDBackToGameButtonObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardSceneCode.GDBackToGameButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardSceneCode.GDBackToGameButtonObjects1[k] = gdjs.LeaderboardSceneCode.GDBackToGameButtonObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardSceneCode.GDBackToGameButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23560156);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}
}

}


};

gdjs.LeaderboardSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardSceneCode.GDGameLeaderboardObjects1.length = 0;
gdjs.LeaderboardSceneCode.GDGameLeaderboardObjects2.length = 0;
gdjs.LeaderboardSceneCode.GDPlayerNameInputObjects1.length = 0;
gdjs.LeaderboardSceneCode.GDPlayerNameInputObjects2.length = 0;
gdjs.LeaderboardSceneCode.GDSubmitButtonObjects1.length = 0;
gdjs.LeaderboardSceneCode.GDSubmitButtonObjects2.length = 0;
gdjs.LeaderboardSceneCode.GDGoldObjects1.length = 0;
gdjs.LeaderboardSceneCode.GDGoldObjects2.length = 0;
gdjs.LeaderboardSceneCode.GDcoinTxtObjects1.length = 0;
gdjs.LeaderboardSceneCode.GDcoinTxtObjects2.length = 0;
gdjs.LeaderboardSceneCode.GDClockObjects1.length = 0;
gdjs.LeaderboardSceneCode.GDClockObjects2.length = 0;
gdjs.LeaderboardSceneCode.GDtimeTxtObjects1.length = 0;
gdjs.LeaderboardSceneCode.GDtimeTxtObjects2.length = 0;
gdjs.LeaderboardSceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.LeaderboardSceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.LeaderboardSceneCode.GDTransparentPanel_95955Objects1.length = 0;
gdjs.LeaderboardSceneCode.GDTransparentPanel_95955Objects2.length = 0;
gdjs.LeaderboardSceneCode.GDBackToGameButtonObjects1.length = 0;
gdjs.LeaderboardSceneCode.GDBackToGameButtonObjects2.length = 0;

gdjs.LeaderboardSceneCode.eventsList0(runtimeScene);
gdjs.LeaderboardSceneCode.GDGameLeaderboardObjects1.length = 0;
gdjs.LeaderboardSceneCode.GDGameLeaderboardObjects2.length = 0;
gdjs.LeaderboardSceneCode.GDPlayerNameInputObjects1.length = 0;
gdjs.LeaderboardSceneCode.GDPlayerNameInputObjects2.length = 0;
gdjs.LeaderboardSceneCode.GDSubmitButtonObjects1.length = 0;
gdjs.LeaderboardSceneCode.GDSubmitButtonObjects2.length = 0;
gdjs.LeaderboardSceneCode.GDGoldObjects1.length = 0;
gdjs.LeaderboardSceneCode.GDGoldObjects2.length = 0;
gdjs.LeaderboardSceneCode.GDcoinTxtObjects1.length = 0;
gdjs.LeaderboardSceneCode.GDcoinTxtObjects2.length = 0;
gdjs.LeaderboardSceneCode.GDClockObjects1.length = 0;
gdjs.LeaderboardSceneCode.GDClockObjects2.length = 0;
gdjs.LeaderboardSceneCode.GDtimeTxtObjects1.length = 0;
gdjs.LeaderboardSceneCode.GDtimeTxtObjects2.length = 0;
gdjs.LeaderboardSceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.LeaderboardSceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.LeaderboardSceneCode.GDTransparentPanel_95955Objects1.length = 0;
gdjs.LeaderboardSceneCode.GDTransparentPanel_95955Objects2.length = 0;
gdjs.LeaderboardSceneCode.GDBackToGameButtonObjects1.length = 0;
gdjs.LeaderboardSceneCode.GDBackToGameButtonObjects2.length = 0;


return;

}

gdjs['LeaderboardSceneCode'] = gdjs.LeaderboardSceneCode;
