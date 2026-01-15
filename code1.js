gdjs.InfoSceneCode = {};
gdjs.InfoSceneCode.localVariables = [];
gdjs.InfoSceneCode.idToCallbackMap = new Map();
gdjs.InfoSceneCode.GDNameTxtObjects1= [];
gdjs.InfoSceneCode.GDNameTxtObjects2= [];
gdjs.InfoSceneCode.GDNameTxtObjects3= [];
gdjs.InfoSceneCode.GDdialogueObjects1= [];
gdjs.InfoSceneCode.GDdialogueObjects2= [];
gdjs.InfoSceneCode.GDdialogueObjects3= [];
gdjs.InfoSceneCode.GDoptionTxtObjects1= [];
gdjs.InfoSceneCode.GDoptionTxtObjects2= [];
gdjs.InfoSceneCode.GDoptionTxtObjects3= [];
gdjs.InfoSceneCode.GDBackgroundObjects1= [];
gdjs.InfoSceneCode.GDBackgroundObjects2= [];
gdjs.InfoSceneCode.GDBackgroundObjects3= [];
gdjs.InfoSceneCode.GDCloudsObjects1= [];
gdjs.InfoSceneCode.GDCloudsObjects2= [];
gdjs.InfoSceneCode.GDCloudsObjects3= [];
gdjs.InfoSceneCode.GDPlanet_95958Objects1= [];
gdjs.InfoSceneCode.GDPlanet_95958Objects2= [];
gdjs.InfoSceneCode.GDPlanet_95958Objects3= [];
gdjs.InfoSceneCode.GDAsjadObjects1= [];
gdjs.InfoSceneCode.GDAsjadObjects2= [];
gdjs.InfoSceneCode.GDAsjadObjects3= [];
gdjs.InfoSceneCode.GDLarge_9595Exit_9595ButtonObjects1= [];
gdjs.InfoSceneCode.GDLarge_9595Exit_9595ButtonObjects2= [];
gdjs.InfoSceneCode.GDLarge_9595Exit_9595ButtonObjects3= [];
gdjs.InfoSceneCode.GDNewSpriteObjects1= [];
gdjs.InfoSceneCode.GDNewSpriteObjects2= [];
gdjs.InfoSceneCode.GDNewSpriteObjects3= [];
gdjs.InfoSceneCode.GDNewTiledSprite2Objects1= [];
gdjs.InfoSceneCode.GDNewTiledSprite2Objects2= [];
gdjs.InfoSceneCode.GDNewTiledSprite2Objects3= [];
gdjs.InfoSceneCode.GDNewTiledSpriteObjects1= [];
gdjs.InfoSceneCode.GDNewTiledSpriteObjects2= [];
gdjs.InfoSceneCode.GDNewTiledSpriteObjects3= [];
gdjs.InfoSceneCode.GDTransparentPanel_95955Objects1= [];
gdjs.InfoSceneCode.GDTransparentPanel_95955Objects2= [];
gdjs.InfoSceneCode.GDTransparentPanel_95955Objects3= [];
gdjs.InfoSceneCode.GDBackToGameButtonObjects1= [];
gdjs.InfoSceneCode.GDBackToGameButtonObjects2= [];
gdjs.InfoSceneCode.GDBackToGameButtonObjects3= [];


gdjs.InfoSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "screenTime") >= 0.05;
if (isConditionTrue_0) {
{gdjs.dialogueTree.scrollClippedText();
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasClippedScrollingCompleted();
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.goToNextDialogueLine();
}
{gdjs.evtTools.sound.playSound(runtimeScene, "75e5f104fe7e6767b8f060c7430288008e1f0523f6eed22f55d96c56d70e98bf_MetalV2_Walk_09.wav", false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasClippedScrollingCompleted();
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.goToNextDialogueLine();
}
{gdjs.evtTools.sound.playSound(runtimeScene, "75e5f104fe7e6767b8f060c7430288008e1f0523f6eed22f55d96c56d70e98bf_MetalV2_Walk_09.wav", false, 100, 1);
}
}

}


};gdjs.InfoSceneCode.mapOfGDgdjs_9546InfoSceneCode_9546GDLarge_95959595Exit_95959595ButtonObjects1Objects = Hashtable.newFrom({"Large_Exit_Button": gdjs.InfoSceneCode.GDLarge_9595Exit_9595ButtonObjects1});
gdjs.InfoSceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "New dialogue tree");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "screenTime");
}
{gdjs.dialogueTree.startFrom("Start");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("text");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("dialogue"), gdjs.InfoSceneCode.GDdialogueObjects1);
{for(var i = 0, len = gdjs.InfoSceneCode.GDdialogueObjects1.length ;i < len;++i) {
    gdjs.InfoSceneCode.GDdialogueObjects1[i].setBBText(gdjs.dialogueTree.getClippedLineText());
}
}

{ //Subevents
gdjs.InfoSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Back");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "75e5f104fe7e6767b8f060c7430288008e1f0523f6eed22f55d96c56d70e98bf_MetalV2_Walk_09.wav", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Large_Exit_Button"), gdjs.InfoSceneCode.GDLarge_9595Exit_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.InfoSceneCode.mapOfGDgdjs_9546InfoSceneCode_9546GDLarge_95959595Exit_95959595ButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "75e5f104fe7e6767b8f060c7430288008e1f0523f6eed22f55d96c56d70e98bf_MetalV2_Walk_09.wav", false, 100, 1);
}
}

}


};

gdjs.InfoSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InfoSceneCode.GDNameTxtObjects1.length = 0;
gdjs.InfoSceneCode.GDNameTxtObjects2.length = 0;
gdjs.InfoSceneCode.GDNameTxtObjects3.length = 0;
gdjs.InfoSceneCode.GDdialogueObjects1.length = 0;
gdjs.InfoSceneCode.GDdialogueObjects2.length = 0;
gdjs.InfoSceneCode.GDdialogueObjects3.length = 0;
gdjs.InfoSceneCode.GDoptionTxtObjects1.length = 0;
gdjs.InfoSceneCode.GDoptionTxtObjects2.length = 0;
gdjs.InfoSceneCode.GDoptionTxtObjects3.length = 0;
gdjs.InfoSceneCode.GDBackgroundObjects1.length = 0;
gdjs.InfoSceneCode.GDBackgroundObjects2.length = 0;
gdjs.InfoSceneCode.GDBackgroundObjects3.length = 0;
gdjs.InfoSceneCode.GDCloudsObjects1.length = 0;
gdjs.InfoSceneCode.GDCloudsObjects2.length = 0;
gdjs.InfoSceneCode.GDCloudsObjects3.length = 0;
gdjs.InfoSceneCode.GDPlanet_95958Objects1.length = 0;
gdjs.InfoSceneCode.GDPlanet_95958Objects2.length = 0;
gdjs.InfoSceneCode.GDPlanet_95958Objects3.length = 0;
gdjs.InfoSceneCode.GDAsjadObjects1.length = 0;
gdjs.InfoSceneCode.GDAsjadObjects2.length = 0;
gdjs.InfoSceneCode.GDAsjadObjects3.length = 0;
gdjs.InfoSceneCode.GDLarge_9595Exit_9595ButtonObjects1.length = 0;
gdjs.InfoSceneCode.GDLarge_9595Exit_9595ButtonObjects2.length = 0;
gdjs.InfoSceneCode.GDLarge_9595Exit_9595ButtonObjects3.length = 0;
gdjs.InfoSceneCode.GDNewSpriteObjects1.length = 0;
gdjs.InfoSceneCode.GDNewSpriteObjects2.length = 0;
gdjs.InfoSceneCode.GDNewSpriteObjects3.length = 0;
gdjs.InfoSceneCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.InfoSceneCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.InfoSceneCode.GDNewTiledSprite2Objects3.length = 0;
gdjs.InfoSceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.InfoSceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.InfoSceneCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.InfoSceneCode.GDTransparentPanel_95955Objects1.length = 0;
gdjs.InfoSceneCode.GDTransparentPanel_95955Objects2.length = 0;
gdjs.InfoSceneCode.GDTransparentPanel_95955Objects3.length = 0;
gdjs.InfoSceneCode.GDBackToGameButtonObjects1.length = 0;
gdjs.InfoSceneCode.GDBackToGameButtonObjects2.length = 0;
gdjs.InfoSceneCode.GDBackToGameButtonObjects3.length = 0;

gdjs.InfoSceneCode.eventsList1(runtimeScene);
gdjs.InfoSceneCode.GDNameTxtObjects1.length = 0;
gdjs.InfoSceneCode.GDNameTxtObjects2.length = 0;
gdjs.InfoSceneCode.GDNameTxtObjects3.length = 0;
gdjs.InfoSceneCode.GDdialogueObjects1.length = 0;
gdjs.InfoSceneCode.GDdialogueObjects2.length = 0;
gdjs.InfoSceneCode.GDdialogueObjects3.length = 0;
gdjs.InfoSceneCode.GDoptionTxtObjects1.length = 0;
gdjs.InfoSceneCode.GDoptionTxtObjects2.length = 0;
gdjs.InfoSceneCode.GDoptionTxtObjects3.length = 0;
gdjs.InfoSceneCode.GDBackgroundObjects1.length = 0;
gdjs.InfoSceneCode.GDBackgroundObjects2.length = 0;
gdjs.InfoSceneCode.GDBackgroundObjects3.length = 0;
gdjs.InfoSceneCode.GDCloudsObjects1.length = 0;
gdjs.InfoSceneCode.GDCloudsObjects2.length = 0;
gdjs.InfoSceneCode.GDCloudsObjects3.length = 0;
gdjs.InfoSceneCode.GDPlanet_95958Objects1.length = 0;
gdjs.InfoSceneCode.GDPlanet_95958Objects2.length = 0;
gdjs.InfoSceneCode.GDPlanet_95958Objects3.length = 0;
gdjs.InfoSceneCode.GDAsjadObjects1.length = 0;
gdjs.InfoSceneCode.GDAsjadObjects2.length = 0;
gdjs.InfoSceneCode.GDAsjadObjects3.length = 0;
gdjs.InfoSceneCode.GDLarge_9595Exit_9595ButtonObjects1.length = 0;
gdjs.InfoSceneCode.GDLarge_9595Exit_9595ButtonObjects2.length = 0;
gdjs.InfoSceneCode.GDLarge_9595Exit_9595ButtonObjects3.length = 0;
gdjs.InfoSceneCode.GDNewSpriteObjects1.length = 0;
gdjs.InfoSceneCode.GDNewSpriteObjects2.length = 0;
gdjs.InfoSceneCode.GDNewSpriteObjects3.length = 0;
gdjs.InfoSceneCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.InfoSceneCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.InfoSceneCode.GDNewTiledSprite2Objects3.length = 0;
gdjs.InfoSceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.InfoSceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.InfoSceneCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.InfoSceneCode.GDTransparentPanel_95955Objects1.length = 0;
gdjs.InfoSceneCode.GDTransparentPanel_95955Objects2.length = 0;
gdjs.InfoSceneCode.GDTransparentPanel_95955Objects3.length = 0;
gdjs.InfoSceneCode.GDBackToGameButtonObjects1.length = 0;
gdjs.InfoSceneCode.GDBackToGameButtonObjects2.length = 0;
gdjs.InfoSceneCode.GDBackToGameButtonObjects3.length = 0;


return;

}

gdjs['InfoSceneCode'] = gdjs.InfoSceneCode;
