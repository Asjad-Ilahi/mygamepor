gdjs.GameSceneCode = {};
gdjs.GameSceneCode.localVariables = [];
gdjs.GameSceneCode.idToCallbackMap = new Map();
gdjs.GameSceneCode.GDWalkJoystickObjects1= [];
gdjs.GameSceneCode.GDWalkJoystickObjects2= [];
gdjs.GameSceneCode.GDWalkJoystickObjects3= [];
gdjs.GameSceneCode.GDWalkJoystickObjects4= [];
gdjs.GameSceneCode.GDLookJoystickObjects1= [];
gdjs.GameSceneCode.GDLookJoystickObjects2= [];
gdjs.GameSceneCode.GDLookJoystickObjects3= [];
gdjs.GameSceneCode.GDLookJoystickObjects4= [];
gdjs.GameSceneCode.GDCoinObjects1= [];
gdjs.GameSceneCode.GDCoinObjects2= [];
gdjs.GameSceneCode.GDCoinObjects3= [];
gdjs.GameSceneCode.GDCoinObjects4= [];
gdjs.GameSceneCode.GDCrateObjects1= [];
gdjs.GameSceneCode.GDCrateObjects2= [];
gdjs.GameSceneCode.GDCrateObjects3= [];
gdjs.GameSceneCode.GDCrateObjects4= [];
gdjs.GameSceneCode.GDCoinExplosionObjects1= [];
gdjs.GameSceneCode.GDCoinExplosionObjects2= [];
gdjs.GameSceneCode.GDCoinExplosionObjects3= [];
gdjs.GameSceneCode.GDCoinExplosionObjects4= [];
gdjs.GameSceneCode.GDSmokeEmitterObjects1= [];
gdjs.GameSceneCode.GDSmokeEmitterObjects2= [];
gdjs.GameSceneCode.GDSmokeEmitterObjects3= [];
gdjs.GameSceneCode.GDSmokeEmitterObjects4= [];
gdjs.GameSceneCode.GDJumpButtonObjects1= [];
gdjs.GameSceneCode.GDJumpButtonObjects2= [];
gdjs.GameSceneCode.GDJumpButtonObjects3= [];
gdjs.GameSceneCode.GDJumpButtonObjects4= [];
gdjs.GameSceneCode.GDPlanet8Objects1= [];
gdjs.GameSceneCode.GDPlanet8Objects2= [];
gdjs.GameSceneCode.GDPlanet8Objects3= [];
gdjs.GameSceneCode.GDPlanet8Objects4= [];
gdjs.GameSceneCode.GDPipeEndObjects1= [];
gdjs.GameSceneCode.GDPipeEndObjects2= [];
gdjs.GameSceneCode.GDPipeEndObjects3= [];
gdjs.GameSceneCode.GDPipeEndObjects4= [];
gdjs.GameSceneCode.GDSteamObjects1= [];
gdjs.GameSceneCode.GDSteamObjects2= [];
gdjs.GameSceneCode.GDSteamObjects3= [];
gdjs.GameSceneCode.GDSteamObjects4= [];
gdjs.GameSceneCode.GDBottomMovingPlatformObjects1= [];
gdjs.GameSceneCode.GDBottomMovingPlatformObjects2= [];
gdjs.GameSceneCode.GDBottomMovingPlatformObjects3= [];
gdjs.GameSceneCode.GDBottomMovingPlatformObjects4= [];
gdjs.GameSceneCode.GDTopMovingPlatformObjects1= [];
gdjs.GameSceneCode.GDTopMovingPlatformObjects2= [];
gdjs.GameSceneCode.GDTopMovingPlatformObjects3= [];
gdjs.GameSceneCode.GDTopMovingPlatformObjects4= [];
gdjs.GameSceneCode.GDPipe90Objects1= [];
gdjs.GameSceneCode.GDPipe90Objects2= [];
gdjs.GameSceneCode.GDPipe90Objects3= [];
gdjs.GameSceneCode.GDPipe90Objects4= [];
gdjs.GameSceneCode.GDPipeStraightObjects1= [];
gdjs.GameSceneCode.GDPipeStraightObjects2= [];
gdjs.GameSceneCode.GDPipeStraightObjects3= [];
gdjs.GameSceneCode.GDPipeStraightObjects4= [];
gdjs.GameSceneCode.GDGemPinkObjects1= [];
gdjs.GameSceneCode.GDGemPinkObjects2= [];
gdjs.GameSceneCode.GDGemPinkObjects3= [];
gdjs.GameSceneCode.GDGemPinkObjects4= [];
gdjs.GameSceneCode.GDGemParticlesObjects1= [];
gdjs.GameSceneCode.GDGemParticlesObjects2= [];
gdjs.GameSceneCode.GDGemParticlesObjects3= [];
gdjs.GameSceneCode.GDGemParticlesObjects4= [];
gdjs.GameSceneCode.GDScreenOrientationCheckerObjects1= [];
gdjs.GameSceneCode.GDScreenOrientationCheckerObjects2= [];
gdjs.GameSceneCode.GDScreenOrientationCheckerObjects3= [];
gdjs.GameSceneCode.GDScreenOrientationCheckerObjects4= [];
gdjs.GameSceneCode.GDCharacterObjects1= [];
gdjs.GameSceneCode.GDCharacterObjects2= [];
gdjs.GameSceneCode.GDCharacterObjects3= [];
gdjs.GameSceneCode.GDCharacterObjects4= [];
gdjs.GameSceneCode.GDPlatform_95952x1_9595EmptyObjects1= [];
gdjs.GameSceneCode.GDPlatform_95952x1_9595EmptyObjects2= [];
gdjs.GameSceneCode.GDPlatform_95952x1_9595EmptyObjects3= [];
gdjs.GameSceneCode.GDPlatform_95952x1_9595EmptyObjects4= [];
gdjs.GameSceneCode.GDBigPlatformObjects1= [];
gdjs.GameSceneCode.GDBigPlatformObjects2= [];
gdjs.GameSceneCode.GDBigPlatformObjects3= [];
gdjs.GameSceneCode.GDBigPlatformObjects4= [];
gdjs.GameSceneCode.GDPlatform_95954x4_9595EmptyObjects1= [];
gdjs.GameSceneCode.GDPlatform_95954x4_9595EmptyObjects2= [];
gdjs.GameSceneCode.GDPlatform_95954x4_9595EmptyObjects3= [];
gdjs.GameSceneCode.GDPlatform_95954x4_9595EmptyObjects4= [];
gdjs.GameSceneCode.GDPlatform_95954x1_9595EmptyObjects1= [];
gdjs.GameSceneCode.GDPlatform_95954x1_9595EmptyObjects2= [];
gdjs.GameSceneCode.GDPlatform_95954x1_9595EmptyObjects3= [];
gdjs.GameSceneCode.GDPlatform_95954x1_9595EmptyObjects4= [];
gdjs.GameSceneCode.GDPlatform_95951x1_9595EmptyObjects1= [];
gdjs.GameSceneCode.GDPlatform_95951x1_9595EmptyObjects2= [];
gdjs.GameSceneCode.GDPlatform_95951x1_9595EmptyObjects3= [];
gdjs.GameSceneCode.GDPlatform_95951x1_9595EmptyObjects4= [];
gdjs.GameSceneCode.GDPlanet_95952Objects1= [];
gdjs.GameSceneCode.GDPlanet_95952Objects2= [];
gdjs.GameSceneCode.GDPlanet_95952Objects3= [];
gdjs.GameSceneCode.GDPlanet_95952Objects4= [];
gdjs.GameSceneCode.GDRock_95951Objects1= [];
gdjs.GameSceneCode.GDRock_95951Objects2= [];
gdjs.GameSceneCode.GDRock_95951Objects3= [];
gdjs.GameSceneCode.GDRock_95951Objects4= [];
gdjs.GameSceneCode.GDCloudObjects1= [];
gdjs.GameSceneCode.GDCloudObjects2= [];
gdjs.GameSceneCode.GDCloudObjects3= [];
gdjs.GameSceneCode.GDCloudObjects4= [];
gdjs.GameSceneCode.GDPlatform_95954x1Objects1= [];
gdjs.GameSceneCode.GDPlatform_95954x1Objects2= [];
gdjs.GameSceneCode.GDPlatform_95954x1Objects3= [];
gdjs.GameSceneCode.GDPlatform_95954x1Objects4= [];
gdjs.GameSceneCode.GDTrash_9595Bag_95951Objects1= [];
gdjs.GameSceneCode.GDTrash_9595Bag_95951Objects2= [];
gdjs.GameSceneCode.GDTrash_9595Bag_95951Objects3= [];
gdjs.GameSceneCode.GDTrash_9595Bag_95951Objects4= [];
gdjs.GameSceneCode.GDTrash_9595Bag_95952Objects1= [];
gdjs.GameSceneCode.GDTrash_9595Bag_95952Objects2= [];
gdjs.GameSceneCode.GDTrash_9595Bag_95952Objects3= [];
gdjs.GameSceneCode.GDTrash_9595Bag_95952Objects4= [];
gdjs.GameSceneCode.GDAsjadObjects1= [];
gdjs.GameSceneCode.GDAsjadObjects2= [];
gdjs.GameSceneCode.GDAsjadObjects3= [];
gdjs.GameSceneCode.GDAsjadObjects4= [];
gdjs.GameSceneCode.GDTrash_9595ContainerObjects1= [];
gdjs.GameSceneCode.GDTrash_9595ContainerObjects2= [];
gdjs.GameSceneCode.GDTrash_9595ContainerObjects3= [];
gdjs.GameSceneCode.GDTrash_9595ContainerObjects4= [];
gdjs.GameSceneCode.GDStructure_95951Objects1= [];
gdjs.GameSceneCode.GDStructure_95951Objects2= [];
gdjs.GameSceneCode.GDStructure_95951Objects3= [];
gdjs.GameSceneCode.GDStructure_95951Objects4= [];
gdjs.GameSceneCode.GDContainer_9595LongObjects1= [];
gdjs.GameSceneCode.GDContainer_9595LongObjects2= [];
gdjs.GameSceneCode.GDContainer_9595LongObjects3= [];
gdjs.GameSceneCode.GDContainer_9595LongObjects4= [];
gdjs.GameSceneCode.GDContainer_9595SmallObjects1= [];
gdjs.GameSceneCode.GDContainer_9595SmallObjects2= [];
gdjs.GameSceneCode.GDContainer_9595SmallObjects3= [];
gdjs.GameSceneCode.GDContainer_9595SmallObjects4= [];
gdjs.GameSceneCode.GDWater_9595Tank_9595FloorObjects1= [];
gdjs.GameSceneCode.GDWater_9595Tank_9595FloorObjects2= [];
gdjs.GameSceneCode.GDWater_9595Tank_9595FloorObjects3= [];
gdjs.GameSceneCode.GDWater_9595Tank_9595FloorObjects4= [];
gdjs.GameSceneCode.GDTrash_9595Container_9595OpenObjects1= [];
gdjs.GameSceneCode.GDTrash_9595Container_9595OpenObjects2= [];
gdjs.GameSceneCode.GDTrash_9595Container_9595OpenObjects3= [];
gdjs.GameSceneCode.GDTrash_9595Container_9595OpenObjects4= [];
gdjs.GameSceneCode.GDBarrier_9595FixedObjects1= [];
gdjs.GameSceneCode.GDBarrier_9595FixedObjects2= [];
gdjs.GameSceneCode.GDBarrier_9595FixedObjects3= [];
gdjs.GameSceneCode.GDBarrier_9595FixedObjects4= [];
gdjs.GameSceneCode.GDCardboard_9595Boxes_95953Objects1= [];
gdjs.GameSceneCode.GDCardboard_9595Boxes_95953Objects2= [];
gdjs.GameSceneCode.GDCardboard_9595Boxes_95953Objects3= [];
gdjs.GameSceneCode.GDCardboard_9595Boxes_95953Objects4= [];
gdjs.GameSceneCode.GDDebris_9595Papers_95952Objects1= [];
gdjs.GameSceneCode.GDDebris_9595Papers_95952Objects2= [];
gdjs.GameSceneCode.GDDebris_9595Papers_95952Objects3= [];
gdjs.GameSceneCode.GDDebris_9595Papers_95952Objects4= [];
gdjs.GameSceneCode.GDTraffic_9595ConeObjects1= [];
gdjs.GameSceneCode.GDTraffic_9595ConeObjects2= [];
gdjs.GameSceneCode.GDTraffic_9595ConeObjects3= [];
gdjs.GameSceneCode.GDTraffic_9595ConeObjects4= [];
gdjs.GameSceneCode.GDExploding_9595BarrelObjects1= [];
gdjs.GameSceneCode.GDExploding_9595BarrelObjects2= [];
gdjs.GameSceneCode.GDExploding_9595BarrelObjects3= [];
gdjs.GameSceneCode.GDExploding_9595BarrelObjects4= [];
gdjs.GameSceneCode.GDDebris_9595PileObjects1= [];
gdjs.GameSceneCode.GDDebris_9595PileObjects2= [];
gdjs.GameSceneCode.GDDebris_9595PileObjects3= [];
gdjs.GameSceneCode.GDDebris_9595PileObjects4= [];
gdjs.GameSceneCode.GDWater_9595Tank_9595PlatformObjects1= [];
gdjs.GameSceneCode.GDWater_9595Tank_9595PlatformObjects2= [];
gdjs.GameSceneCode.GDWater_9595Tank_9595PlatformObjects3= [];
gdjs.GameSceneCode.GDWater_9595Tank_9595PlatformObjects4= [];
gdjs.GameSceneCode.GDBarrier_9595TrashObjects1= [];
gdjs.GameSceneCode.GDBarrier_9595TrashObjects2= [];
gdjs.GameSceneCode.GDBarrier_9595TrashObjects3= [];
gdjs.GameSceneCode.GDBarrier_9595TrashObjects4= [];
gdjs.GameSceneCode.GDComputerObjects1= [];
gdjs.GameSceneCode.GDComputerObjects2= [];
gdjs.GameSceneCode.GDComputerObjects3= [];
gdjs.GameSceneCode.GDComputerObjects4= [];
gdjs.GameSceneCode.GDAntenna_95952Objects1= [];
gdjs.GameSceneCode.GDAntenna_95952Objects2= [];
gdjs.GameSceneCode.GDAntenna_95952Objects3= [];
gdjs.GameSceneCode.GDAntenna_95952Objects4= [];
gdjs.GameSceneCode.GDSign_9595Corner_9595HazardObjects1= [];
gdjs.GameSceneCode.GDSign_9595Corner_9595HazardObjects2= [];
gdjs.GameSceneCode.GDSign_9595Corner_9595HazardObjects3= [];
gdjs.GameSceneCode.GDSign_9595Corner_9595HazardObjects4= [];
gdjs.GameSceneCode.GDRail_9595CornerObjects1= [];
gdjs.GameSceneCode.GDRail_9595CornerObjects2= [];
gdjs.GameSceneCode.GDRail_9595CornerObjects3= [];
gdjs.GameSceneCode.GDRail_9595CornerObjects4= [];
gdjs.GameSceneCode.GDRail_9595ShortObjects1= [];
gdjs.GameSceneCode.GDRail_9595ShortObjects2= [];
gdjs.GameSceneCode.GDRail_9595ShortObjects3= [];
gdjs.GameSceneCode.GDRail_9595ShortObjects4= [];
gdjs.GameSceneCode.GDAir_9595Conditioner_9595StackedObjects1= [];
gdjs.GameSceneCode.GDAir_9595Conditioner_9595StackedObjects2= [];
gdjs.GameSceneCode.GDAir_9595Conditioner_9595StackedObjects3= [];
gdjs.GameSceneCode.GDAir_9595Conditioner_9595StackedObjects4= [];
gdjs.GameSceneCode.GDAntenna_95951Objects1= [];
gdjs.GameSceneCode.GDAntenna_95951Objects2= [];
gdjs.GameSceneCode.GDAntenna_95951Objects3= [];
gdjs.GameSceneCode.GDAntenna_95951Objects4= [];
gdjs.GameSceneCode.GDStructure_95953Objects1= [];
gdjs.GameSceneCode.GDStructure_95953Objects2= [];
gdjs.GameSceneCode.GDStructure_95953Objects3= [];
gdjs.GameSceneCode.GDStructure_95953Objects4= [];
gdjs.GameSceneCode.GDTurret_9595TeleporterObjects1= [];
gdjs.GameSceneCode.GDTurret_9595TeleporterObjects2= [];
gdjs.GameSceneCode.GDTurret_9595TeleporterObjects3= [];
gdjs.GameSceneCode.GDTurret_9595TeleporterObjects4= [];
gdjs.GameSceneCode.GDAlien_9595TallObjects1= [];
gdjs.GameSceneCode.GDAlien_9595TallObjects2= [];
gdjs.GameSceneCode.GDAlien_9595TallObjects3= [];
gdjs.GameSceneCode.GDAlien_9595TallObjects4= [];
gdjs.GameSceneCode.GDYetiObjects1= [];
gdjs.GameSceneCode.GDYetiObjects2= [];
gdjs.GameSceneCode.GDYetiObjects3= [];
gdjs.GameSceneCode.GDYetiObjects4= [];
gdjs.GameSceneCode.GDCyclopsObjects1= [];
gdjs.GameSceneCode.GDCyclopsObjects2= [];
gdjs.GameSceneCode.GDCyclopsObjects3= [];
gdjs.GameSceneCode.GDCyclopsObjects4= [];
gdjs.GameSceneCode.GDAlienObjects1= [];
gdjs.GameSceneCode.GDAlienObjects2= [];
gdjs.GameSceneCode.GDAlienObjects3= [];
gdjs.GameSceneCode.GDAlienObjects4= [];
gdjs.GameSceneCode.GDCoinCountTextObjects1= [];
gdjs.GameSceneCode.GDCoinCountTextObjects2= [];
gdjs.GameSceneCode.GDCoinCountTextObjects3= [];
gdjs.GameSceneCode.GDCoinCountTextObjects4= [];
gdjs.GameSceneCode.GDHealthBarPanelObjects1= [];
gdjs.GameSceneCode.GDHealthBarPanelObjects2= [];
gdjs.GameSceneCode.GDHealthBarPanelObjects3= [];
gdjs.GameSceneCode.GDHealthBarPanelObjects4= [];
gdjs.GameSceneCode.GDtimeTxtObjects1= [];
gdjs.GameSceneCode.GDtimeTxtObjects2= [];
gdjs.GameSceneCode.GDtimeTxtObjects3= [];
gdjs.GameSceneCode.GDtimeTxtObjects4= [];
gdjs.GameSceneCode.GDRetryObjects1= [];
gdjs.GameSceneCode.GDRetryObjects2= [];
gdjs.GameSceneCode.GDRetryObjects3= [];
gdjs.GameSceneCode.GDRetryObjects4= [];
gdjs.GameSceneCode.GDNewTiledSpriteObjects1= [];
gdjs.GameSceneCode.GDNewTiledSpriteObjects2= [];
gdjs.GameSceneCode.GDNewTiledSpriteObjects3= [];
gdjs.GameSceneCode.GDNewTiledSpriteObjects4= [];
gdjs.GameSceneCode.GDTransparentPanel_95955Objects1= [];
gdjs.GameSceneCode.GDTransparentPanel_95955Objects2= [];
gdjs.GameSceneCode.GDTransparentPanel_95955Objects3= [];
gdjs.GameSceneCode.GDTransparentPanel_95955Objects4= [];
gdjs.GameSceneCode.GDBackToGameButtonObjects1= [];
gdjs.GameSceneCode.GDBackToGameButtonObjects2= [];
gdjs.GameSceneCode.GDBackToGameButtonObjects3= [];
gdjs.GameSceneCode.GDBackToGameButtonObjects4= [];


gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDRetryObjects1Objects = Hashtable.newFrom({"Retry": gdjs.GameSceneCode.GDRetryObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCharacterObjects2Objects = Hashtable.newFrom({"Character": gdjs.GameSceneCode.GDCharacterObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPipeEndObjects2Objects = Hashtable.newFrom({"PipeEnd": gdjs.GameSceneCode.GDPipeEndObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDSmokeEmitterObjects2Objects = Hashtable.newFrom({"SmokeEmitter": gdjs.GameSceneCode.GDSmokeEmitterObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCharacterObjects2Objects = Hashtable.newFrom({"Character": gdjs.GameSceneCode.GDCharacterObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCoinObjects2Objects = Hashtable.newFrom({"Coin": gdjs.GameSceneCode.GDCoinObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCoinExplosionObjects2Objects = Hashtable.newFrom({"CoinExplosion": gdjs.GameSceneCode.GDCoinExplosionObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCharacterObjects2Objects = Hashtable.newFrom({"Character": gdjs.GameSceneCode.GDCharacterObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDAsjadObjects2Objects = Hashtable.newFrom({"Asjad": gdjs.GameSceneCode.GDAsjadObjects2});
gdjs.GameSceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Asjad"), gdjs.GameSceneCode.GDAsjadObjects2);
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.GameSceneCode.GDCharacterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.areObjectsColliding(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCharacterObjects2Objects, "Physics3D", gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDAsjadObjects2Objects, "Physics3D", false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "InfoScene");
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(true);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "1f1ebe8108992cd14f6e6efd76a9b665945c890b833501122abe84f5c6519b24_Hit 5.aac", false, 100, 1);
}
}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCharacterObjects2Objects = Hashtable.newFrom({"Character": gdjs.GameSceneCode.GDCharacterObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDAsjadObjects2Objects = Hashtable.newFrom({"Asjad": gdjs.GameSceneCode.GDAsjadObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCharacterObjects2Objects = Hashtable.newFrom({"Character": gdjs.GameSceneCode.GDCharacterObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDAlienObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDAlien_95959595TallObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDCyclopsObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDYetiObjects2Objects = Hashtable.newFrom({"Alien": gdjs.GameSceneCode.GDAlienObjects2, "Alien_Tall": gdjs.GameSceneCode.GDAlien_9595TallObjects2, "Cyclops": gdjs.GameSceneCode.GDCyclopsObjects2, "Yeti": gdjs.GameSceneCode.GDYetiObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCharacterObjects2Objects = Hashtable.newFrom({"Character": gdjs.GameSceneCode.GDCharacterObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDAlienObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDAlien_95959595TallObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDCyclopsObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDYetiObjects2Objects = Hashtable.newFrom({"Alien": gdjs.GameSceneCode.GDAlienObjects2, "Alien_Tall": gdjs.GameSceneCode.GDAlien_9595TallObjects2, "Cyclops": gdjs.GameSceneCode.GDCyclopsObjects2, "Yeti": gdjs.GameSceneCode.GDYetiObjects2});
gdjs.GameSceneCode.asyncCallback23004564 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameSceneCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Alien"), gdjs.GameSceneCode.GDAlienObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("Alien_Tall"), gdjs.GameSceneCode.GDAlien_9595TallObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("Cyclops"), gdjs.GameSceneCode.GDCyclopsObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("Yeti"), gdjs.GameSceneCode.GDYetiObjects3);

{for(var i = 0, len = gdjs.GameSceneCode.GDAlienObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDAlienObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameSceneCode.GDAlien_9595TallObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDAlien_9595TallObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameSceneCode.GDCyclopsObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDCyclopsObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameSceneCode.GDYetiObjects3.length ;i < len;++i) {
    gdjs.GameSceneCode.GDYetiObjects3[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "79edd118c78e61127af0458f42beb030eca65bfe304abacaa49bba5f25cf36d7_Bleep_05.aac", false, 100, 1);
}
gdjs.GameSceneCode.localVariables.length = 0;
}
gdjs.GameSceneCode.idToCallbackMap.set(23004564, gdjs.GameSceneCode.asyncCallback23004564);
gdjs.GameSceneCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameSceneCode.localVariables);
for (const obj of gdjs.GameSceneCode.GDAlienObjects2) asyncObjectsList.addObject("Alien", obj);
for (const obj of gdjs.GameSceneCode.GDAlien_9595TallObjects2) asyncObjectsList.addObject("Alien_Tall", obj);
for (const obj of gdjs.GameSceneCode.GDCyclopsObjects2) asyncObjectsList.addObject("Cyclops", obj);
for (const obj of gdjs.GameSceneCode.GDYetiObjects2) asyncObjectsList.addObject("Yeti", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.GameSceneCode.asyncCallback23004564(runtimeScene, asyncObjectsList)), 23004564, asyncObjectsList);
}
}

}


};gdjs.GameSceneCode.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.GameSceneCode.GDAlienObjects2 */
/* Reuse gdjs.GameSceneCode.GDAlien_9595TallObjects2 */
/* Reuse gdjs.GameSceneCode.GDCyclopsObjects2 */
/* Reuse gdjs.GameSceneCode.GDYetiObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDAlienObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDAlienObjects2[i].getBehavior("Health").Health(null) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDAlienObjects2[k] = gdjs.GameSceneCode.GDAlienObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDAlienObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDAlien_9595TallObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDAlien_9595TallObjects2[i].getBehavior("Health").Health(null) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDAlien_9595TallObjects2[k] = gdjs.GameSceneCode.GDAlien_9595TallObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDAlien_9595TallObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDCyclopsObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDCyclopsObjects2[i].getBehavior("Health").Health(null) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDCyclopsObjects2[k] = gdjs.GameSceneCode.GDCyclopsObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDCyclopsObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDYetiObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDYetiObjects2[i].getBehavior("Health").Health(null) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDYetiObjects2[k] = gdjs.GameSceneCode.GDYetiObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDYetiObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23004252);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDAlienObjects2 */
/* Reuse gdjs.GameSceneCode.GDAlien_9595TallObjects2 */
/* Reuse gdjs.GameSceneCode.GDCyclopsObjects2 */
/* Reuse gdjs.GameSceneCode.GDYetiObjects2 */
{for(var i = 0, len = gdjs.GameSceneCode.GDAlienObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDAlienObjects2[i].getBehavior("Animation").setAnimationName("Death");
}
for(var i = 0, len = gdjs.GameSceneCode.GDAlien_9595TallObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDAlien_9595TallObjects2[i].getBehavior("Animation").setAnimationName("Death");
}
for(var i = 0, len = gdjs.GameSceneCode.GDCyclopsObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDCyclopsObjects2[i].getBehavior("Animation").setAnimationName("Death");
}
for(var i = 0, len = gdjs.GameSceneCode.GDYetiObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDYetiObjects2[i].getBehavior("Animation").setAnimationName("Death");
}
}

{ //Subevents
gdjs.GameSceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCharacterObjects2Objects = Hashtable.newFrom({"Character": gdjs.GameSceneCode.GDCharacterObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDAlienObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDAlien_95959595TallObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDCyclopsObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDYetiObjects2Objects = Hashtable.newFrom({"Alien": gdjs.GameSceneCode.GDAlienObjects2, "Alien_Tall": gdjs.GameSceneCode.GDAlien_9595TallObjects2, "Cyclops": gdjs.GameSceneCode.GDCyclopsObjects2, "Yeti": gdjs.GameSceneCode.GDYetiObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCharacterObjects1Objects = Hashtable.newFrom({"Character": gdjs.GameSceneCode.GDCharacterObjects1});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDGemPinkObjects1Objects = Hashtable.newFrom({"GemPink": gdjs.GameSceneCode.GDGemPinkObjects1});
gdjs.GameSceneCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "LeaderboardScene", false);
}
}

}


};gdjs.GameSceneCode.asyncCallback23008700 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameSceneCode.localVariables);

{ //Subevents
gdjs.GameSceneCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.GameSceneCode.localVariables.length = 0;
}
gdjs.GameSceneCode.idToCallbackMap.set(23008700, gdjs.GameSceneCode.asyncCallback23008700);
gdjs.GameSceneCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameSceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameSceneCode.asyncCallback23008700(runtimeScene, asyncObjectsList)), 23008700, asyncObjectsList);
}
}

}


};gdjs.GameSceneCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Asjad"), gdjs.GameSceneCode.GDAsjadObjects2);
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.GameSceneCode.GDCharacterObjects2);
gdjs.copyArray(runtimeScene.getObjects("PipeEnd"), gdjs.GameSceneCode.GDPipeEndObjects2);
{gdjs.evtsExt__SteamPipe__PushCharacterUpward.func(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCharacterObjects2Objects, "AdvancedJump3D", "Object3D", "PhysicsCharacter3D", gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDPipeEndObjects2Objects, "Object3D", null);
}
{for(var i = 0, len = gdjs.GameSceneCode.GDAsjadObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDAsjadObjects2[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.GameSceneCode.GDCharacterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDCharacterObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDCharacterObjects2[i].getBehavior("PhysicsCharacter3D").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDCharacterObjects2[k] = gdjs.GameSceneCode.GDCharacterObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDCharacterObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22997036);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDCharacterObjects2 */
gdjs.GameSceneCode.GDSmokeEmitterObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDSmokeEmitterObjects2Objects, (( gdjs.GameSceneCode.GDCharacterObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDCharacterObjects2[0].getCenterXInScene()), (( gdjs.GameSceneCode.GDCharacterObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDCharacterObjects2[0].getCenterYInScene()), "");
}
{for(var i = 0, len = gdjs.GameSceneCode.GDSmokeEmitterObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDSmokeEmitterObjects2[i].getBehavior("Object3D").setZ((( gdjs.GameSceneCode.GDCharacterObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDCharacterObjects2[0].getZ()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.GameSceneCode.GDCharacterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.GameSceneCode.GDCoinObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Collision3D__AreWithinDistance.func(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCharacterObjects2Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCoinObjects2Objects, 100, false, null);
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDCoinObjects2 */
gdjs.copyArray(runtimeScene.getObjects("CoinExplosion"), gdjs.GameSceneCode.GDCoinExplosionObjects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "982e7b54cdd141371ad82b0ab7ce659f5b4b7ca6eb1f87c895d4da99d3f98ce2_Coins 6.aac", false, 100, 1);
}
{for(var i = 0, len = gdjs.GameSceneCode.GDCoinObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDCoinObjects2[i].getBehavior("Collectible").Explode(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCoinExplosionObjects2Objects, "Object3D", null);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(3).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Asjad"), gdjs.GameSceneCode.GDAsjadObjects2);
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.GameSceneCode.GDCharacterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics3d.areObjectsColliding(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCharacterObjects2Objects, "Physics3D", gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDAsjadObjects2Objects, "Physics3D", true);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setBoolean(false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Alien"), gdjs.GameSceneCode.GDAlienObjects2);
gdjs.copyArray(runtimeScene.getObjects("Alien_Tall"), gdjs.GameSceneCode.GDAlien_9595TallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.GameSceneCode.GDCharacterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Cyclops"), gdjs.GameSceneCode.GDCyclopsObjects2);
gdjs.copyArray(runtimeScene.getObjects("Yeti"), gdjs.GameSceneCode.GDYetiObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Collision3D__AreWithinDistance.func(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCharacterObjects2Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDAlienObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDAlien_95959595TallObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDCyclopsObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDYetiObjects2Objects, 700, true, null);
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDAlienObjects2 */
/* Reuse gdjs.GameSceneCode.GDAlien_9595TallObjects2 */
/* Reuse gdjs.GameSceneCode.GDCharacterObjects2 */
/* Reuse gdjs.GameSceneCode.GDCyclopsObjects2 */
/* Reuse gdjs.GameSceneCode.GDYetiObjects2 */
{for(var i = 0, len = gdjs.GameSceneCode.GDAlienObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDAlienObjects2[i].getBehavior("Animation").setAnimationName("Run");
}
for(var i = 0, len = gdjs.GameSceneCode.GDAlien_9595TallObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDAlien_9595TallObjects2[i].getBehavior("Animation").setAnimationName("Run");
}
for(var i = 0, len = gdjs.GameSceneCode.GDCyclopsObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDCyclopsObjects2[i].getBehavior("Animation").setAnimationName("Run");
}
for(var i = 0, len = gdjs.GameSceneCode.GDYetiObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDYetiObjects2[i].getBehavior("Animation").setAnimationName("Run");
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDAlienObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDAlienObjects2[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.GameSceneCode.GDCharacterObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDCharacterObjects2[0].getX()), (( gdjs.GameSceneCode.GDCharacterObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDCharacterObjects2[0].getY()));
}
for(var i = 0, len = gdjs.GameSceneCode.GDAlien_9595TallObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDAlien_9595TallObjects2[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.GameSceneCode.GDCharacterObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDCharacterObjects2[0].getX()), (( gdjs.GameSceneCode.GDCharacterObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDCharacterObjects2[0].getY()));
}
for(var i = 0, len = gdjs.GameSceneCode.GDCyclopsObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDCyclopsObjects2[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.GameSceneCode.GDCharacterObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDCharacterObjects2[0].getX()), (( gdjs.GameSceneCode.GDCharacterObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDCharacterObjects2[0].getY()));
}
for(var i = 0, len = gdjs.GameSceneCode.GDYetiObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDYetiObjects2[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.GameSceneCode.GDCharacterObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDCharacterObjects2[0].getX()), (( gdjs.GameSceneCode.GDCharacterObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDCharacterObjects2[0].getY()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Alien"), gdjs.GameSceneCode.GDAlienObjects2);
gdjs.copyArray(runtimeScene.getObjects("Alien_Tall"), gdjs.GameSceneCode.GDAlien_9595TallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.GameSceneCode.GDCharacterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Cyclops"), gdjs.GameSceneCode.GDCyclopsObjects2);
gdjs.copyArray(runtimeScene.getObjects("Yeti"), gdjs.GameSceneCode.GDYetiObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCharacterObjects2Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDAlienObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDAlien_95959595TallObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDCyclopsObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDYetiObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDCharacterObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDCharacterObjects2[i].getBehavior("PhysicsCharacter3D").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDCharacterObjects2[k] = gdjs.GameSceneCode.GDCharacterObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDCharacterObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDAlienObjects2 */
/* Reuse gdjs.GameSceneCode.GDAlien_9595TallObjects2 */
/* Reuse gdjs.GameSceneCode.GDCyclopsObjects2 */
/* Reuse gdjs.GameSceneCode.GDYetiObjects2 */
{for(var i = 0, len = gdjs.GameSceneCode.GDAlienObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDAlienObjects2[i].getBehavior("Health").SetHealth(0, null);
}
for(var i = 0, len = gdjs.GameSceneCode.GDAlien_9595TallObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDAlien_9595TallObjects2[i].getBehavior("Health").SetHealth(0, null);
}
for(var i = 0, len = gdjs.GameSceneCode.GDCyclopsObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDCyclopsObjects2[i].getBehavior("Health").SetHealth(0, null);
}
for(var i = 0, len = gdjs.GameSceneCode.GDYetiObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDYetiObjects2[i].getBehavior("Health").SetHealth(0, null);
}
}

{ //Subevents
gdjs.GameSceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Alien"), gdjs.GameSceneCode.GDAlienObjects2);
gdjs.copyArray(runtimeScene.getObjects("Alien_Tall"), gdjs.GameSceneCode.GDAlien_9595TallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.GameSceneCode.GDCharacterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Cyclops"), gdjs.GameSceneCode.GDCyclopsObjects2);
gdjs.copyArray(runtimeScene.getObjects("Yeti"), gdjs.GameSceneCode.GDYetiObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCharacterObjects2Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDAlienObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDAlien_95959595TallObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDCyclopsObjects2ObjectsGDgdjs_9546GameSceneCode_9546GDYetiObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDCharacterObjects2.length;i<l;++i) {
    if ( !(gdjs.GameSceneCode.GDCharacterObjects2[i].getBehavior("Health").IsDamageCooldownActive(null)) ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDCharacterObjects2[k] = gdjs.GameSceneCode.GDCharacterObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDCharacterObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDCharacterObjects2 */
{for(var i = 0, len = gdjs.GameSceneCode.GDCharacterObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDCharacterObjects2[i].getBehavior("Health").Hit(10, true, true, null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "35050b95a0e87ff94beb868c98c76367570bb5ce35dd1d792e3a84f57dd16b73_Hit 1.aac", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.GameSceneCode.GDCharacterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameSceneCode.GDCharacterObjects2.length;i<l;++i) {
    if ( gdjs.GameSceneCode.GDCharacterObjects2[i].getBehavior("Health").Health(null) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameSceneCode.GDCharacterObjects2[k] = gdjs.GameSceneCode.GDCharacterObjects2[i];
        ++k;
    }
}
gdjs.GameSceneCode.GDCharacterObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.GameSceneCode.GDCharacterObjects1);
gdjs.copyArray(runtimeScene.getObjects("GemPink"), gdjs.GameSceneCode.GDGemPinkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCharacterObjects1Objects, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDGemPinkObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23001460);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDGemPinkObjects1 */
{for(var i = 0, len = gdjs.GameSceneCode.GDGemPinkObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDGemPinkObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "GameTimer"));
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
{gdjs.evtTools.sound.playSound(runtimeScene, "79edd118c78e61127af0458f42beb030eca65bfe304abacaa49bba5f25cf36d7_Bleep_05.aac", false, 100, 1);
}

{ //Subevents
gdjs.GameSceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCloudObjects2Objects = Hashtable.newFrom({"Cloud": gdjs.GameSceneCode.GDCloudObjects2});
gdjs.GameSceneCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("WalkJoystick"), gdjs.GameSceneCode.GDWalkJoystickObjects2);
{for(var i = 0, len = gdjs.GameSceneCode.GDWalkJoystickObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDWalkJoystickObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDWalkJoystickObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDWalkJoystickObjects2[i].ActivateControl(false, null);
}
}
}

}


};gdjs.GameSceneCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Touch controls", 0, 0, 0);
}

{ //Subevents
gdjs.GameSceneCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDWalkJoystickObjects2Objects = Hashtable.newFrom({"WalkJoystick": gdjs.GameSceneCode.GDWalkJoystickObjects2});
gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDWalkJoystickObjects2Objects = Hashtable.newFrom({"WalkJoystick": gdjs.GameSceneCode.GDWalkJoystickObjects2});
gdjs.GameSceneCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, null);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WalkJoystick"), gdjs.GameSceneCode.GDWalkJoystickObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.func(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDWalkJoystickObjects2Objects, "Left", null));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__SpriteMultitouchJoystick__IsButtonPressed.func(runtimeScene, 1, "A", null));
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, null);
}
}

}


};gdjs.GameSceneCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.GameSceneCode.GDCharacterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Cloud"), gdjs.GameSceneCode.GDCloudObjects2);
{gdjs.evtsExt__Background__CreateObjectOnCylinder.func(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDCloudObjects2Objects, "Object3D", "Scale", 48, 700, 1200, 2500, 8000, -(400), 800, null);
}
{gdjs.evtTools.camera.setCameraRotation(runtimeScene, (( gdjs.GameSceneCode.GDCharacterObjects2.length === 0 ) ? 0 :gdjs.GameSceneCode.GDCharacterObjects2[0].getAngle()) + 90, "", 0);
}

{ //Subevents
gdjs.GameSceneCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WalkJoystick"), gdjs.GameSceneCode.GDWalkJoystickObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__HasTouchStartedOnScreenSide.func(runtimeScene, gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDWalkJoystickObjects2Objects, "Left", null);
if (isConditionTrue_0) {
/* Reuse gdjs.GameSceneCode.GDWalkJoystickObjects2 */
{for(var i = 0, len = gdjs.GameSceneCode.GDWalkJoystickObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDWalkJoystickObjects2[i].TeleportAndPress(null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__MousePointerLock__isPointerLocked.func(runtimeScene, null));
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameSceneCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.GameSceneCode.GDCharacterObjects2);
{for(var i = 0, len = gdjs.GameSceneCode.GDCharacterObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDCharacterObjects2[i].getBehavior("ThirdPersonCamera").MoveCameraCloser(null);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CoinCountText"), gdjs.GameSceneCode.GDCoinCountTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("timeTxt"), gdjs.GameSceneCode.GDtimeTxtObjects2);
{for(var i = 0, len = gdjs.GameSceneCode.GDCoinCountTextObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDCoinCountTextObjects2[i].getBehavior("Text").setText("Coins: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDtimeTxtObjects2.length ;i < len;++i) {
    gdjs.GameSceneCode.GDtimeTxtObjects2[i].getBehavior("Text").setText("Time: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.roundTo(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "GameTimer"), 2)));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Character"), gdjs.GameSceneCode.GDCharacterObjects1);
gdjs.copyArray(runtimeScene.getObjects("HealthBarPanel"), gdjs.GameSceneCode.GDHealthBarPanelObjects1);
{for(var i = 0, len = gdjs.GameSceneCode.GDHealthBarPanelObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDHealthBarPanelObjects1[i].getBehavior("Resizable").setWidth(((( gdjs.GameSceneCode.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDCharacterObjects1[0].getBehavior("Health").Health(null)) / (( gdjs.GameSceneCode.GDCharacterObjects1.length === 0 ) ? 0 :gdjs.GameSceneCode.GDCharacterObjects1[0].getBehavior("Health").MaxHealth(null))) * 200);
}
}
}

}


};gdjs.GameSceneCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Alien"), gdjs.GameSceneCode.GDAlienObjects1);
gdjs.copyArray(runtimeScene.getObjects("Alien_Tall"), gdjs.GameSceneCode.GDAlien_9595TallObjects1);
gdjs.copyArray(runtimeScene.getObjects("CoinCountText"), gdjs.GameSceneCode.GDCoinCountTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cyclops"), gdjs.GameSceneCode.GDCyclopsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yeti"), gdjs.GameSceneCode.GDYetiObjects1);
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "New dialogue tree");
}
{for(var i = 0, len = gdjs.GameSceneCode.GDAlien_9595TallObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDAlien_9595TallObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDCyclopsObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDCyclopsObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDYetiObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDYetiObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDAlienObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDAlienObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}
{for(var i = 0, len = gdjs.GameSceneCode.GDCoinCountTextObjects1.length ;i < len;++i) {
    gdjs.GameSceneCode.GDCoinCountTextObjects1[i].getBehavior("Text").setText("Coins: 0");
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "GameTimer");
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "music", 1, true, 70, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.isSoundOnChannelStopped(runtimeScene, 1);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "music", 1, true, 70, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Retry"), gdjs.GameSceneCode.GDRetryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameSceneCode.mapOfGDgdjs_9546GameSceneCode_9546GDRetryObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}
}

}


{


gdjs.GameSceneCode.eventsList5(runtimeScene);
}


{


gdjs.GameSceneCode.eventsList9(runtimeScene);
}


};

gdjs.GameSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameSceneCode.GDWalkJoystickObjects1.length = 0;
gdjs.GameSceneCode.GDWalkJoystickObjects2.length = 0;
gdjs.GameSceneCode.GDWalkJoystickObjects3.length = 0;
gdjs.GameSceneCode.GDWalkJoystickObjects4.length = 0;
gdjs.GameSceneCode.GDLookJoystickObjects1.length = 0;
gdjs.GameSceneCode.GDLookJoystickObjects2.length = 0;
gdjs.GameSceneCode.GDLookJoystickObjects3.length = 0;
gdjs.GameSceneCode.GDLookJoystickObjects4.length = 0;
gdjs.GameSceneCode.GDCoinObjects1.length = 0;
gdjs.GameSceneCode.GDCoinObjects2.length = 0;
gdjs.GameSceneCode.GDCoinObjects3.length = 0;
gdjs.GameSceneCode.GDCoinObjects4.length = 0;
gdjs.GameSceneCode.GDCrateObjects1.length = 0;
gdjs.GameSceneCode.GDCrateObjects2.length = 0;
gdjs.GameSceneCode.GDCrateObjects3.length = 0;
gdjs.GameSceneCode.GDCrateObjects4.length = 0;
gdjs.GameSceneCode.GDCoinExplosionObjects1.length = 0;
gdjs.GameSceneCode.GDCoinExplosionObjects2.length = 0;
gdjs.GameSceneCode.GDCoinExplosionObjects3.length = 0;
gdjs.GameSceneCode.GDCoinExplosionObjects4.length = 0;
gdjs.GameSceneCode.GDSmokeEmitterObjects1.length = 0;
gdjs.GameSceneCode.GDSmokeEmitterObjects2.length = 0;
gdjs.GameSceneCode.GDSmokeEmitterObjects3.length = 0;
gdjs.GameSceneCode.GDSmokeEmitterObjects4.length = 0;
gdjs.GameSceneCode.GDJumpButtonObjects1.length = 0;
gdjs.GameSceneCode.GDJumpButtonObjects2.length = 0;
gdjs.GameSceneCode.GDJumpButtonObjects3.length = 0;
gdjs.GameSceneCode.GDJumpButtonObjects4.length = 0;
gdjs.GameSceneCode.GDPlanet8Objects1.length = 0;
gdjs.GameSceneCode.GDPlanet8Objects2.length = 0;
gdjs.GameSceneCode.GDPlanet8Objects3.length = 0;
gdjs.GameSceneCode.GDPlanet8Objects4.length = 0;
gdjs.GameSceneCode.GDPipeEndObjects1.length = 0;
gdjs.GameSceneCode.GDPipeEndObjects2.length = 0;
gdjs.GameSceneCode.GDPipeEndObjects3.length = 0;
gdjs.GameSceneCode.GDPipeEndObjects4.length = 0;
gdjs.GameSceneCode.GDSteamObjects1.length = 0;
gdjs.GameSceneCode.GDSteamObjects2.length = 0;
gdjs.GameSceneCode.GDSteamObjects3.length = 0;
gdjs.GameSceneCode.GDSteamObjects4.length = 0;
gdjs.GameSceneCode.GDBottomMovingPlatformObjects1.length = 0;
gdjs.GameSceneCode.GDBottomMovingPlatformObjects2.length = 0;
gdjs.GameSceneCode.GDBottomMovingPlatformObjects3.length = 0;
gdjs.GameSceneCode.GDBottomMovingPlatformObjects4.length = 0;
gdjs.GameSceneCode.GDTopMovingPlatformObjects1.length = 0;
gdjs.GameSceneCode.GDTopMovingPlatformObjects2.length = 0;
gdjs.GameSceneCode.GDTopMovingPlatformObjects3.length = 0;
gdjs.GameSceneCode.GDTopMovingPlatformObjects4.length = 0;
gdjs.GameSceneCode.GDPipe90Objects1.length = 0;
gdjs.GameSceneCode.GDPipe90Objects2.length = 0;
gdjs.GameSceneCode.GDPipe90Objects3.length = 0;
gdjs.GameSceneCode.GDPipe90Objects4.length = 0;
gdjs.GameSceneCode.GDPipeStraightObjects1.length = 0;
gdjs.GameSceneCode.GDPipeStraightObjects2.length = 0;
gdjs.GameSceneCode.GDPipeStraightObjects3.length = 0;
gdjs.GameSceneCode.GDPipeStraightObjects4.length = 0;
gdjs.GameSceneCode.GDGemPinkObjects1.length = 0;
gdjs.GameSceneCode.GDGemPinkObjects2.length = 0;
gdjs.GameSceneCode.GDGemPinkObjects3.length = 0;
gdjs.GameSceneCode.GDGemPinkObjects4.length = 0;
gdjs.GameSceneCode.GDGemParticlesObjects1.length = 0;
gdjs.GameSceneCode.GDGemParticlesObjects2.length = 0;
gdjs.GameSceneCode.GDGemParticlesObjects3.length = 0;
gdjs.GameSceneCode.GDGemParticlesObjects4.length = 0;
gdjs.GameSceneCode.GDScreenOrientationCheckerObjects1.length = 0;
gdjs.GameSceneCode.GDScreenOrientationCheckerObjects2.length = 0;
gdjs.GameSceneCode.GDScreenOrientationCheckerObjects3.length = 0;
gdjs.GameSceneCode.GDScreenOrientationCheckerObjects4.length = 0;
gdjs.GameSceneCode.GDCharacterObjects1.length = 0;
gdjs.GameSceneCode.GDCharacterObjects2.length = 0;
gdjs.GameSceneCode.GDCharacterObjects3.length = 0;
gdjs.GameSceneCode.GDCharacterObjects4.length = 0;
gdjs.GameSceneCode.GDPlatform_95952x1_9595EmptyObjects1.length = 0;
gdjs.GameSceneCode.GDPlatform_95952x1_9595EmptyObjects2.length = 0;
gdjs.GameSceneCode.GDPlatform_95952x1_9595EmptyObjects3.length = 0;
gdjs.GameSceneCode.GDPlatform_95952x1_9595EmptyObjects4.length = 0;
gdjs.GameSceneCode.GDBigPlatformObjects1.length = 0;
gdjs.GameSceneCode.GDBigPlatformObjects2.length = 0;
gdjs.GameSceneCode.GDBigPlatformObjects3.length = 0;
gdjs.GameSceneCode.GDBigPlatformObjects4.length = 0;
gdjs.GameSceneCode.GDPlatform_95954x4_9595EmptyObjects1.length = 0;
gdjs.GameSceneCode.GDPlatform_95954x4_9595EmptyObjects2.length = 0;
gdjs.GameSceneCode.GDPlatform_95954x4_9595EmptyObjects3.length = 0;
gdjs.GameSceneCode.GDPlatform_95954x4_9595EmptyObjects4.length = 0;
gdjs.GameSceneCode.GDPlatform_95954x1_9595EmptyObjects1.length = 0;
gdjs.GameSceneCode.GDPlatform_95954x1_9595EmptyObjects2.length = 0;
gdjs.GameSceneCode.GDPlatform_95954x1_9595EmptyObjects3.length = 0;
gdjs.GameSceneCode.GDPlatform_95954x1_9595EmptyObjects4.length = 0;
gdjs.GameSceneCode.GDPlatform_95951x1_9595EmptyObjects1.length = 0;
gdjs.GameSceneCode.GDPlatform_95951x1_9595EmptyObjects2.length = 0;
gdjs.GameSceneCode.GDPlatform_95951x1_9595EmptyObjects3.length = 0;
gdjs.GameSceneCode.GDPlatform_95951x1_9595EmptyObjects4.length = 0;
gdjs.GameSceneCode.GDPlanet_95952Objects1.length = 0;
gdjs.GameSceneCode.GDPlanet_95952Objects2.length = 0;
gdjs.GameSceneCode.GDPlanet_95952Objects3.length = 0;
gdjs.GameSceneCode.GDPlanet_95952Objects4.length = 0;
gdjs.GameSceneCode.GDRock_95951Objects1.length = 0;
gdjs.GameSceneCode.GDRock_95951Objects2.length = 0;
gdjs.GameSceneCode.GDRock_95951Objects3.length = 0;
gdjs.GameSceneCode.GDRock_95951Objects4.length = 0;
gdjs.GameSceneCode.GDCloudObjects1.length = 0;
gdjs.GameSceneCode.GDCloudObjects2.length = 0;
gdjs.GameSceneCode.GDCloudObjects3.length = 0;
gdjs.GameSceneCode.GDCloudObjects4.length = 0;
gdjs.GameSceneCode.GDPlatform_95954x1Objects1.length = 0;
gdjs.GameSceneCode.GDPlatform_95954x1Objects2.length = 0;
gdjs.GameSceneCode.GDPlatform_95954x1Objects3.length = 0;
gdjs.GameSceneCode.GDPlatform_95954x1Objects4.length = 0;
gdjs.GameSceneCode.GDTrash_9595Bag_95951Objects1.length = 0;
gdjs.GameSceneCode.GDTrash_9595Bag_95951Objects2.length = 0;
gdjs.GameSceneCode.GDTrash_9595Bag_95951Objects3.length = 0;
gdjs.GameSceneCode.GDTrash_9595Bag_95951Objects4.length = 0;
gdjs.GameSceneCode.GDTrash_9595Bag_95952Objects1.length = 0;
gdjs.GameSceneCode.GDTrash_9595Bag_95952Objects2.length = 0;
gdjs.GameSceneCode.GDTrash_9595Bag_95952Objects3.length = 0;
gdjs.GameSceneCode.GDTrash_9595Bag_95952Objects4.length = 0;
gdjs.GameSceneCode.GDAsjadObjects1.length = 0;
gdjs.GameSceneCode.GDAsjadObjects2.length = 0;
gdjs.GameSceneCode.GDAsjadObjects3.length = 0;
gdjs.GameSceneCode.GDAsjadObjects4.length = 0;
gdjs.GameSceneCode.GDTrash_9595ContainerObjects1.length = 0;
gdjs.GameSceneCode.GDTrash_9595ContainerObjects2.length = 0;
gdjs.GameSceneCode.GDTrash_9595ContainerObjects3.length = 0;
gdjs.GameSceneCode.GDTrash_9595ContainerObjects4.length = 0;
gdjs.GameSceneCode.GDStructure_95951Objects1.length = 0;
gdjs.GameSceneCode.GDStructure_95951Objects2.length = 0;
gdjs.GameSceneCode.GDStructure_95951Objects3.length = 0;
gdjs.GameSceneCode.GDStructure_95951Objects4.length = 0;
gdjs.GameSceneCode.GDContainer_9595LongObjects1.length = 0;
gdjs.GameSceneCode.GDContainer_9595LongObjects2.length = 0;
gdjs.GameSceneCode.GDContainer_9595LongObjects3.length = 0;
gdjs.GameSceneCode.GDContainer_9595LongObjects4.length = 0;
gdjs.GameSceneCode.GDContainer_9595SmallObjects1.length = 0;
gdjs.GameSceneCode.GDContainer_9595SmallObjects2.length = 0;
gdjs.GameSceneCode.GDContainer_9595SmallObjects3.length = 0;
gdjs.GameSceneCode.GDContainer_9595SmallObjects4.length = 0;
gdjs.GameSceneCode.GDWater_9595Tank_9595FloorObjects1.length = 0;
gdjs.GameSceneCode.GDWater_9595Tank_9595FloorObjects2.length = 0;
gdjs.GameSceneCode.GDWater_9595Tank_9595FloorObjects3.length = 0;
gdjs.GameSceneCode.GDWater_9595Tank_9595FloorObjects4.length = 0;
gdjs.GameSceneCode.GDTrash_9595Container_9595OpenObjects1.length = 0;
gdjs.GameSceneCode.GDTrash_9595Container_9595OpenObjects2.length = 0;
gdjs.GameSceneCode.GDTrash_9595Container_9595OpenObjects3.length = 0;
gdjs.GameSceneCode.GDTrash_9595Container_9595OpenObjects4.length = 0;
gdjs.GameSceneCode.GDBarrier_9595FixedObjects1.length = 0;
gdjs.GameSceneCode.GDBarrier_9595FixedObjects2.length = 0;
gdjs.GameSceneCode.GDBarrier_9595FixedObjects3.length = 0;
gdjs.GameSceneCode.GDBarrier_9595FixedObjects4.length = 0;
gdjs.GameSceneCode.GDCardboard_9595Boxes_95953Objects1.length = 0;
gdjs.GameSceneCode.GDCardboard_9595Boxes_95953Objects2.length = 0;
gdjs.GameSceneCode.GDCardboard_9595Boxes_95953Objects3.length = 0;
gdjs.GameSceneCode.GDCardboard_9595Boxes_95953Objects4.length = 0;
gdjs.GameSceneCode.GDDebris_9595Papers_95952Objects1.length = 0;
gdjs.GameSceneCode.GDDebris_9595Papers_95952Objects2.length = 0;
gdjs.GameSceneCode.GDDebris_9595Papers_95952Objects3.length = 0;
gdjs.GameSceneCode.GDDebris_9595Papers_95952Objects4.length = 0;
gdjs.GameSceneCode.GDTraffic_9595ConeObjects1.length = 0;
gdjs.GameSceneCode.GDTraffic_9595ConeObjects2.length = 0;
gdjs.GameSceneCode.GDTraffic_9595ConeObjects3.length = 0;
gdjs.GameSceneCode.GDTraffic_9595ConeObjects4.length = 0;
gdjs.GameSceneCode.GDExploding_9595BarrelObjects1.length = 0;
gdjs.GameSceneCode.GDExploding_9595BarrelObjects2.length = 0;
gdjs.GameSceneCode.GDExploding_9595BarrelObjects3.length = 0;
gdjs.GameSceneCode.GDExploding_9595BarrelObjects4.length = 0;
gdjs.GameSceneCode.GDDebris_9595PileObjects1.length = 0;
gdjs.GameSceneCode.GDDebris_9595PileObjects2.length = 0;
gdjs.GameSceneCode.GDDebris_9595PileObjects3.length = 0;
gdjs.GameSceneCode.GDDebris_9595PileObjects4.length = 0;
gdjs.GameSceneCode.GDWater_9595Tank_9595PlatformObjects1.length = 0;
gdjs.GameSceneCode.GDWater_9595Tank_9595PlatformObjects2.length = 0;
gdjs.GameSceneCode.GDWater_9595Tank_9595PlatformObjects3.length = 0;
gdjs.GameSceneCode.GDWater_9595Tank_9595PlatformObjects4.length = 0;
gdjs.GameSceneCode.GDBarrier_9595TrashObjects1.length = 0;
gdjs.GameSceneCode.GDBarrier_9595TrashObjects2.length = 0;
gdjs.GameSceneCode.GDBarrier_9595TrashObjects3.length = 0;
gdjs.GameSceneCode.GDBarrier_9595TrashObjects4.length = 0;
gdjs.GameSceneCode.GDComputerObjects1.length = 0;
gdjs.GameSceneCode.GDComputerObjects2.length = 0;
gdjs.GameSceneCode.GDComputerObjects3.length = 0;
gdjs.GameSceneCode.GDComputerObjects4.length = 0;
gdjs.GameSceneCode.GDAntenna_95952Objects1.length = 0;
gdjs.GameSceneCode.GDAntenna_95952Objects2.length = 0;
gdjs.GameSceneCode.GDAntenna_95952Objects3.length = 0;
gdjs.GameSceneCode.GDAntenna_95952Objects4.length = 0;
gdjs.GameSceneCode.GDSign_9595Corner_9595HazardObjects1.length = 0;
gdjs.GameSceneCode.GDSign_9595Corner_9595HazardObjects2.length = 0;
gdjs.GameSceneCode.GDSign_9595Corner_9595HazardObjects3.length = 0;
gdjs.GameSceneCode.GDSign_9595Corner_9595HazardObjects4.length = 0;
gdjs.GameSceneCode.GDRail_9595CornerObjects1.length = 0;
gdjs.GameSceneCode.GDRail_9595CornerObjects2.length = 0;
gdjs.GameSceneCode.GDRail_9595CornerObjects3.length = 0;
gdjs.GameSceneCode.GDRail_9595CornerObjects4.length = 0;
gdjs.GameSceneCode.GDRail_9595ShortObjects1.length = 0;
gdjs.GameSceneCode.GDRail_9595ShortObjects2.length = 0;
gdjs.GameSceneCode.GDRail_9595ShortObjects3.length = 0;
gdjs.GameSceneCode.GDRail_9595ShortObjects4.length = 0;
gdjs.GameSceneCode.GDAir_9595Conditioner_9595StackedObjects1.length = 0;
gdjs.GameSceneCode.GDAir_9595Conditioner_9595StackedObjects2.length = 0;
gdjs.GameSceneCode.GDAir_9595Conditioner_9595StackedObjects3.length = 0;
gdjs.GameSceneCode.GDAir_9595Conditioner_9595StackedObjects4.length = 0;
gdjs.GameSceneCode.GDAntenna_95951Objects1.length = 0;
gdjs.GameSceneCode.GDAntenna_95951Objects2.length = 0;
gdjs.GameSceneCode.GDAntenna_95951Objects3.length = 0;
gdjs.GameSceneCode.GDAntenna_95951Objects4.length = 0;
gdjs.GameSceneCode.GDStructure_95953Objects1.length = 0;
gdjs.GameSceneCode.GDStructure_95953Objects2.length = 0;
gdjs.GameSceneCode.GDStructure_95953Objects3.length = 0;
gdjs.GameSceneCode.GDStructure_95953Objects4.length = 0;
gdjs.GameSceneCode.GDTurret_9595TeleporterObjects1.length = 0;
gdjs.GameSceneCode.GDTurret_9595TeleporterObjects2.length = 0;
gdjs.GameSceneCode.GDTurret_9595TeleporterObjects3.length = 0;
gdjs.GameSceneCode.GDTurret_9595TeleporterObjects4.length = 0;
gdjs.GameSceneCode.GDAlien_9595TallObjects1.length = 0;
gdjs.GameSceneCode.GDAlien_9595TallObjects2.length = 0;
gdjs.GameSceneCode.GDAlien_9595TallObjects3.length = 0;
gdjs.GameSceneCode.GDAlien_9595TallObjects4.length = 0;
gdjs.GameSceneCode.GDYetiObjects1.length = 0;
gdjs.GameSceneCode.GDYetiObjects2.length = 0;
gdjs.GameSceneCode.GDYetiObjects3.length = 0;
gdjs.GameSceneCode.GDYetiObjects4.length = 0;
gdjs.GameSceneCode.GDCyclopsObjects1.length = 0;
gdjs.GameSceneCode.GDCyclopsObjects2.length = 0;
gdjs.GameSceneCode.GDCyclopsObjects3.length = 0;
gdjs.GameSceneCode.GDCyclopsObjects4.length = 0;
gdjs.GameSceneCode.GDAlienObjects1.length = 0;
gdjs.GameSceneCode.GDAlienObjects2.length = 0;
gdjs.GameSceneCode.GDAlienObjects3.length = 0;
gdjs.GameSceneCode.GDAlienObjects4.length = 0;
gdjs.GameSceneCode.GDCoinCountTextObjects1.length = 0;
gdjs.GameSceneCode.GDCoinCountTextObjects2.length = 0;
gdjs.GameSceneCode.GDCoinCountTextObjects3.length = 0;
gdjs.GameSceneCode.GDCoinCountTextObjects4.length = 0;
gdjs.GameSceneCode.GDHealthBarPanelObjects1.length = 0;
gdjs.GameSceneCode.GDHealthBarPanelObjects2.length = 0;
gdjs.GameSceneCode.GDHealthBarPanelObjects3.length = 0;
gdjs.GameSceneCode.GDHealthBarPanelObjects4.length = 0;
gdjs.GameSceneCode.GDtimeTxtObjects1.length = 0;
gdjs.GameSceneCode.GDtimeTxtObjects2.length = 0;
gdjs.GameSceneCode.GDtimeTxtObjects3.length = 0;
gdjs.GameSceneCode.GDtimeTxtObjects4.length = 0;
gdjs.GameSceneCode.GDRetryObjects1.length = 0;
gdjs.GameSceneCode.GDRetryObjects2.length = 0;
gdjs.GameSceneCode.GDRetryObjects3.length = 0;
gdjs.GameSceneCode.GDRetryObjects4.length = 0;
gdjs.GameSceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.GameSceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.GameSceneCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.GameSceneCode.GDNewTiledSpriteObjects4.length = 0;
gdjs.GameSceneCode.GDTransparentPanel_95955Objects1.length = 0;
gdjs.GameSceneCode.GDTransparentPanel_95955Objects2.length = 0;
gdjs.GameSceneCode.GDTransparentPanel_95955Objects3.length = 0;
gdjs.GameSceneCode.GDTransparentPanel_95955Objects4.length = 0;
gdjs.GameSceneCode.GDBackToGameButtonObjects1.length = 0;
gdjs.GameSceneCode.GDBackToGameButtonObjects2.length = 0;
gdjs.GameSceneCode.GDBackToGameButtonObjects3.length = 0;
gdjs.GameSceneCode.GDBackToGameButtonObjects4.length = 0;

gdjs.GameSceneCode.eventsList10(runtimeScene);
gdjs.GameSceneCode.GDWalkJoystickObjects1.length = 0;
gdjs.GameSceneCode.GDWalkJoystickObjects2.length = 0;
gdjs.GameSceneCode.GDWalkJoystickObjects3.length = 0;
gdjs.GameSceneCode.GDWalkJoystickObjects4.length = 0;
gdjs.GameSceneCode.GDLookJoystickObjects1.length = 0;
gdjs.GameSceneCode.GDLookJoystickObjects2.length = 0;
gdjs.GameSceneCode.GDLookJoystickObjects3.length = 0;
gdjs.GameSceneCode.GDLookJoystickObjects4.length = 0;
gdjs.GameSceneCode.GDCoinObjects1.length = 0;
gdjs.GameSceneCode.GDCoinObjects2.length = 0;
gdjs.GameSceneCode.GDCoinObjects3.length = 0;
gdjs.GameSceneCode.GDCoinObjects4.length = 0;
gdjs.GameSceneCode.GDCrateObjects1.length = 0;
gdjs.GameSceneCode.GDCrateObjects2.length = 0;
gdjs.GameSceneCode.GDCrateObjects3.length = 0;
gdjs.GameSceneCode.GDCrateObjects4.length = 0;
gdjs.GameSceneCode.GDCoinExplosionObjects1.length = 0;
gdjs.GameSceneCode.GDCoinExplosionObjects2.length = 0;
gdjs.GameSceneCode.GDCoinExplosionObjects3.length = 0;
gdjs.GameSceneCode.GDCoinExplosionObjects4.length = 0;
gdjs.GameSceneCode.GDSmokeEmitterObjects1.length = 0;
gdjs.GameSceneCode.GDSmokeEmitterObjects2.length = 0;
gdjs.GameSceneCode.GDSmokeEmitterObjects3.length = 0;
gdjs.GameSceneCode.GDSmokeEmitterObjects4.length = 0;
gdjs.GameSceneCode.GDJumpButtonObjects1.length = 0;
gdjs.GameSceneCode.GDJumpButtonObjects2.length = 0;
gdjs.GameSceneCode.GDJumpButtonObjects3.length = 0;
gdjs.GameSceneCode.GDJumpButtonObjects4.length = 0;
gdjs.GameSceneCode.GDPlanet8Objects1.length = 0;
gdjs.GameSceneCode.GDPlanet8Objects2.length = 0;
gdjs.GameSceneCode.GDPlanet8Objects3.length = 0;
gdjs.GameSceneCode.GDPlanet8Objects4.length = 0;
gdjs.GameSceneCode.GDPipeEndObjects1.length = 0;
gdjs.GameSceneCode.GDPipeEndObjects2.length = 0;
gdjs.GameSceneCode.GDPipeEndObjects3.length = 0;
gdjs.GameSceneCode.GDPipeEndObjects4.length = 0;
gdjs.GameSceneCode.GDSteamObjects1.length = 0;
gdjs.GameSceneCode.GDSteamObjects2.length = 0;
gdjs.GameSceneCode.GDSteamObjects3.length = 0;
gdjs.GameSceneCode.GDSteamObjects4.length = 0;
gdjs.GameSceneCode.GDBottomMovingPlatformObjects1.length = 0;
gdjs.GameSceneCode.GDBottomMovingPlatformObjects2.length = 0;
gdjs.GameSceneCode.GDBottomMovingPlatformObjects3.length = 0;
gdjs.GameSceneCode.GDBottomMovingPlatformObjects4.length = 0;
gdjs.GameSceneCode.GDTopMovingPlatformObjects1.length = 0;
gdjs.GameSceneCode.GDTopMovingPlatformObjects2.length = 0;
gdjs.GameSceneCode.GDTopMovingPlatformObjects3.length = 0;
gdjs.GameSceneCode.GDTopMovingPlatformObjects4.length = 0;
gdjs.GameSceneCode.GDPipe90Objects1.length = 0;
gdjs.GameSceneCode.GDPipe90Objects2.length = 0;
gdjs.GameSceneCode.GDPipe90Objects3.length = 0;
gdjs.GameSceneCode.GDPipe90Objects4.length = 0;
gdjs.GameSceneCode.GDPipeStraightObjects1.length = 0;
gdjs.GameSceneCode.GDPipeStraightObjects2.length = 0;
gdjs.GameSceneCode.GDPipeStraightObjects3.length = 0;
gdjs.GameSceneCode.GDPipeStraightObjects4.length = 0;
gdjs.GameSceneCode.GDGemPinkObjects1.length = 0;
gdjs.GameSceneCode.GDGemPinkObjects2.length = 0;
gdjs.GameSceneCode.GDGemPinkObjects3.length = 0;
gdjs.GameSceneCode.GDGemPinkObjects4.length = 0;
gdjs.GameSceneCode.GDGemParticlesObjects1.length = 0;
gdjs.GameSceneCode.GDGemParticlesObjects2.length = 0;
gdjs.GameSceneCode.GDGemParticlesObjects3.length = 0;
gdjs.GameSceneCode.GDGemParticlesObjects4.length = 0;
gdjs.GameSceneCode.GDScreenOrientationCheckerObjects1.length = 0;
gdjs.GameSceneCode.GDScreenOrientationCheckerObjects2.length = 0;
gdjs.GameSceneCode.GDScreenOrientationCheckerObjects3.length = 0;
gdjs.GameSceneCode.GDScreenOrientationCheckerObjects4.length = 0;
gdjs.GameSceneCode.GDCharacterObjects1.length = 0;
gdjs.GameSceneCode.GDCharacterObjects2.length = 0;
gdjs.GameSceneCode.GDCharacterObjects3.length = 0;
gdjs.GameSceneCode.GDCharacterObjects4.length = 0;
gdjs.GameSceneCode.GDPlatform_95952x1_9595EmptyObjects1.length = 0;
gdjs.GameSceneCode.GDPlatform_95952x1_9595EmptyObjects2.length = 0;
gdjs.GameSceneCode.GDPlatform_95952x1_9595EmptyObjects3.length = 0;
gdjs.GameSceneCode.GDPlatform_95952x1_9595EmptyObjects4.length = 0;
gdjs.GameSceneCode.GDBigPlatformObjects1.length = 0;
gdjs.GameSceneCode.GDBigPlatformObjects2.length = 0;
gdjs.GameSceneCode.GDBigPlatformObjects3.length = 0;
gdjs.GameSceneCode.GDBigPlatformObjects4.length = 0;
gdjs.GameSceneCode.GDPlatform_95954x4_9595EmptyObjects1.length = 0;
gdjs.GameSceneCode.GDPlatform_95954x4_9595EmptyObjects2.length = 0;
gdjs.GameSceneCode.GDPlatform_95954x4_9595EmptyObjects3.length = 0;
gdjs.GameSceneCode.GDPlatform_95954x4_9595EmptyObjects4.length = 0;
gdjs.GameSceneCode.GDPlatform_95954x1_9595EmptyObjects1.length = 0;
gdjs.GameSceneCode.GDPlatform_95954x1_9595EmptyObjects2.length = 0;
gdjs.GameSceneCode.GDPlatform_95954x1_9595EmptyObjects3.length = 0;
gdjs.GameSceneCode.GDPlatform_95954x1_9595EmptyObjects4.length = 0;
gdjs.GameSceneCode.GDPlatform_95951x1_9595EmptyObjects1.length = 0;
gdjs.GameSceneCode.GDPlatform_95951x1_9595EmptyObjects2.length = 0;
gdjs.GameSceneCode.GDPlatform_95951x1_9595EmptyObjects3.length = 0;
gdjs.GameSceneCode.GDPlatform_95951x1_9595EmptyObjects4.length = 0;
gdjs.GameSceneCode.GDPlanet_95952Objects1.length = 0;
gdjs.GameSceneCode.GDPlanet_95952Objects2.length = 0;
gdjs.GameSceneCode.GDPlanet_95952Objects3.length = 0;
gdjs.GameSceneCode.GDPlanet_95952Objects4.length = 0;
gdjs.GameSceneCode.GDRock_95951Objects1.length = 0;
gdjs.GameSceneCode.GDRock_95951Objects2.length = 0;
gdjs.GameSceneCode.GDRock_95951Objects3.length = 0;
gdjs.GameSceneCode.GDRock_95951Objects4.length = 0;
gdjs.GameSceneCode.GDCloudObjects1.length = 0;
gdjs.GameSceneCode.GDCloudObjects2.length = 0;
gdjs.GameSceneCode.GDCloudObjects3.length = 0;
gdjs.GameSceneCode.GDCloudObjects4.length = 0;
gdjs.GameSceneCode.GDPlatform_95954x1Objects1.length = 0;
gdjs.GameSceneCode.GDPlatform_95954x1Objects2.length = 0;
gdjs.GameSceneCode.GDPlatform_95954x1Objects3.length = 0;
gdjs.GameSceneCode.GDPlatform_95954x1Objects4.length = 0;
gdjs.GameSceneCode.GDTrash_9595Bag_95951Objects1.length = 0;
gdjs.GameSceneCode.GDTrash_9595Bag_95951Objects2.length = 0;
gdjs.GameSceneCode.GDTrash_9595Bag_95951Objects3.length = 0;
gdjs.GameSceneCode.GDTrash_9595Bag_95951Objects4.length = 0;
gdjs.GameSceneCode.GDTrash_9595Bag_95952Objects1.length = 0;
gdjs.GameSceneCode.GDTrash_9595Bag_95952Objects2.length = 0;
gdjs.GameSceneCode.GDTrash_9595Bag_95952Objects3.length = 0;
gdjs.GameSceneCode.GDTrash_9595Bag_95952Objects4.length = 0;
gdjs.GameSceneCode.GDAsjadObjects1.length = 0;
gdjs.GameSceneCode.GDAsjadObjects2.length = 0;
gdjs.GameSceneCode.GDAsjadObjects3.length = 0;
gdjs.GameSceneCode.GDAsjadObjects4.length = 0;
gdjs.GameSceneCode.GDTrash_9595ContainerObjects1.length = 0;
gdjs.GameSceneCode.GDTrash_9595ContainerObjects2.length = 0;
gdjs.GameSceneCode.GDTrash_9595ContainerObjects3.length = 0;
gdjs.GameSceneCode.GDTrash_9595ContainerObjects4.length = 0;
gdjs.GameSceneCode.GDStructure_95951Objects1.length = 0;
gdjs.GameSceneCode.GDStructure_95951Objects2.length = 0;
gdjs.GameSceneCode.GDStructure_95951Objects3.length = 0;
gdjs.GameSceneCode.GDStructure_95951Objects4.length = 0;
gdjs.GameSceneCode.GDContainer_9595LongObjects1.length = 0;
gdjs.GameSceneCode.GDContainer_9595LongObjects2.length = 0;
gdjs.GameSceneCode.GDContainer_9595LongObjects3.length = 0;
gdjs.GameSceneCode.GDContainer_9595LongObjects4.length = 0;
gdjs.GameSceneCode.GDContainer_9595SmallObjects1.length = 0;
gdjs.GameSceneCode.GDContainer_9595SmallObjects2.length = 0;
gdjs.GameSceneCode.GDContainer_9595SmallObjects3.length = 0;
gdjs.GameSceneCode.GDContainer_9595SmallObjects4.length = 0;
gdjs.GameSceneCode.GDWater_9595Tank_9595FloorObjects1.length = 0;
gdjs.GameSceneCode.GDWater_9595Tank_9595FloorObjects2.length = 0;
gdjs.GameSceneCode.GDWater_9595Tank_9595FloorObjects3.length = 0;
gdjs.GameSceneCode.GDWater_9595Tank_9595FloorObjects4.length = 0;
gdjs.GameSceneCode.GDTrash_9595Container_9595OpenObjects1.length = 0;
gdjs.GameSceneCode.GDTrash_9595Container_9595OpenObjects2.length = 0;
gdjs.GameSceneCode.GDTrash_9595Container_9595OpenObjects3.length = 0;
gdjs.GameSceneCode.GDTrash_9595Container_9595OpenObjects4.length = 0;
gdjs.GameSceneCode.GDBarrier_9595FixedObjects1.length = 0;
gdjs.GameSceneCode.GDBarrier_9595FixedObjects2.length = 0;
gdjs.GameSceneCode.GDBarrier_9595FixedObjects3.length = 0;
gdjs.GameSceneCode.GDBarrier_9595FixedObjects4.length = 0;
gdjs.GameSceneCode.GDCardboard_9595Boxes_95953Objects1.length = 0;
gdjs.GameSceneCode.GDCardboard_9595Boxes_95953Objects2.length = 0;
gdjs.GameSceneCode.GDCardboard_9595Boxes_95953Objects3.length = 0;
gdjs.GameSceneCode.GDCardboard_9595Boxes_95953Objects4.length = 0;
gdjs.GameSceneCode.GDDebris_9595Papers_95952Objects1.length = 0;
gdjs.GameSceneCode.GDDebris_9595Papers_95952Objects2.length = 0;
gdjs.GameSceneCode.GDDebris_9595Papers_95952Objects3.length = 0;
gdjs.GameSceneCode.GDDebris_9595Papers_95952Objects4.length = 0;
gdjs.GameSceneCode.GDTraffic_9595ConeObjects1.length = 0;
gdjs.GameSceneCode.GDTraffic_9595ConeObjects2.length = 0;
gdjs.GameSceneCode.GDTraffic_9595ConeObjects3.length = 0;
gdjs.GameSceneCode.GDTraffic_9595ConeObjects4.length = 0;
gdjs.GameSceneCode.GDExploding_9595BarrelObjects1.length = 0;
gdjs.GameSceneCode.GDExploding_9595BarrelObjects2.length = 0;
gdjs.GameSceneCode.GDExploding_9595BarrelObjects3.length = 0;
gdjs.GameSceneCode.GDExploding_9595BarrelObjects4.length = 0;
gdjs.GameSceneCode.GDDebris_9595PileObjects1.length = 0;
gdjs.GameSceneCode.GDDebris_9595PileObjects2.length = 0;
gdjs.GameSceneCode.GDDebris_9595PileObjects3.length = 0;
gdjs.GameSceneCode.GDDebris_9595PileObjects4.length = 0;
gdjs.GameSceneCode.GDWater_9595Tank_9595PlatformObjects1.length = 0;
gdjs.GameSceneCode.GDWater_9595Tank_9595PlatformObjects2.length = 0;
gdjs.GameSceneCode.GDWater_9595Tank_9595PlatformObjects3.length = 0;
gdjs.GameSceneCode.GDWater_9595Tank_9595PlatformObjects4.length = 0;
gdjs.GameSceneCode.GDBarrier_9595TrashObjects1.length = 0;
gdjs.GameSceneCode.GDBarrier_9595TrashObjects2.length = 0;
gdjs.GameSceneCode.GDBarrier_9595TrashObjects3.length = 0;
gdjs.GameSceneCode.GDBarrier_9595TrashObjects4.length = 0;
gdjs.GameSceneCode.GDComputerObjects1.length = 0;
gdjs.GameSceneCode.GDComputerObjects2.length = 0;
gdjs.GameSceneCode.GDComputerObjects3.length = 0;
gdjs.GameSceneCode.GDComputerObjects4.length = 0;
gdjs.GameSceneCode.GDAntenna_95952Objects1.length = 0;
gdjs.GameSceneCode.GDAntenna_95952Objects2.length = 0;
gdjs.GameSceneCode.GDAntenna_95952Objects3.length = 0;
gdjs.GameSceneCode.GDAntenna_95952Objects4.length = 0;
gdjs.GameSceneCode.GDSign_9595Corner_9595HazardObjects1.length = 0;
gdjs.GameSceneCode.GDSign_9595Corner_9595HazardObjects2.length = 0;
gdjs.GameSceneCode.GDSign_9595Corner_9595HazardObjects3.length = 0;
gdjs.GameSceneCode.GDSign_9595Corner_9595HazardObjects4.length = 0;
gdjs.GameSceneCode.GDRail_9595CornerObjects1.length = 0;
gdjs.GameSceneCode.GDRail_9595CornerObjects2.length = 0;
gdjs.GameSceneCode.GDRail_9595CornerObjects3.length = 0;
gdjs.GameSceneCode.GDRail_9595CornerObjects4.length = 0;
gdjs.GameSceneCode.GDRail_9595ShortObjects1.length = 0;
gdjs.GameSceneCode.GDRail_9595ShortObjects2.length = 0;
gdjs.GameSceneCode.GDRail_9595ShortObjects3.length = 0;
gdjs.GameSceneCode.GDRail_9595ShortObjects4.length = 0;
gdjs.GameSceneCode.GDAir_9595Conditioner_9595StackedObjects1.length = 0;
gdjs.GameSceneCode.GDAir_9595Conditioner_9595StackedObjects2.length = 0;
gdjs.GameSceneCode.GDAir_9595Conditioner_9595StackedObjects3.length = 0;
gdjs.GameSceneCode.GDAir_9595Conditioner_9595StackedObjects4.length = 0;
gdjs.GameSceneCode.GDAntenna_95951Objects1.length = 0;
gdjs.GameSceneCode.GDAntenna_95951Objects2.length = 0;
gdjs.GameSceneCode.GDAntenna_95951Objects3.length = 0;
gdjs.GameSceneCode.GDAntenna_95951Objects4.length = 0;
gdjs.GameSceneCode.GDStructure_95953Objects1.length = 0;
gdjs.GameSceneCode.GDStructure_95953Objects2.length = 0;
gdjs.GameSceneCode.GDStructure_95953Objects3.length = 0;
gdjs.GameSceneCode.GDStructure_95953Objects4.length = 0;
gdjs.GameSceneCode.GDTurret_9595TeleporterObjects1.length = 0;
gdjs.GameSceneCode.GDTurret_9595TeleporterObjects2.length = 0;
gdjs.GameSceneCode.GDTurret_9595TeleporterObjects3.length = 0;
gdjs.GameSceneCode.GDTurret_9595TeleporterObjects4.length = 0;
gdjs.GameSceneCode.GDAlien_9595TallObjects1.length = 0;
gdjs.GameSceneCode.GDAlien_9595TallObjects2.length = 0;
gdjs.GameSceneCode.GDAlien_9595TallObjects3.length = 0;
gdjs.GameSceneCode.GDAlien_9595TallObjects4.length = 0;
gdjs.GameSceneCode.GDYetiObjects1.length = 0;
gdjs.GameSceneCode.GDYetiObjects2.length = 0;
gdjs.GameSceneCode.GDYetiObjects3.length = 0;
gdjs.GameSceneCode.GDYetiObjects4.length = 0;
gdjs.GameSceneCode.GDCyclopsObjects1.length = 0;
gdjs.GameSceneCode.GDCyclopsObjects2.length = 0;
gdjs.GameSceneCode.GDCyclopsObjects3.length = 0;
gdjs.GameSceneCode.GDCyclopsObjects4.length = 0;
gdjs.GameSceneCode.GDAlienObjects1.length = 0;
gdjs.GameSceneCode.GDAlienObjects2.length = 0;
gdjs.GameSceneCode.GDAlienObjects3.length = 0;
gdjs.GameSceneCode.GDAlienObjects4.length = 0;
gdjs.GameSceneCode.GDCoinCountTextObjects1.length = 0;
gdjs.GameSceneCode.GDCoinCountTextObjects2.length = 0;
gdjs.GameSceneCode.GDCoinCountTextObjects3.length = 0;
gdjs.GameSceneCode.GDCoinCountTextObjects4.length = 0;
gdjs.GameSceneCode.GDHealthBarPanelObjects1.length = 0;
gdjs.GameSceneCode.GDHealthBarPanelObjects2.length = 0;
gdjs.GameSceneCode.GDHealthBarPanelObjects3.length = 0;
gdjs.GameSceneCode.GDHealthBarPanelObjects4.length = 0;
gdjs.GameSceneCode.GDtimeTxtObjects1.length = 0;
gdjs.GameSceneCode.GDtimeTxtObjects2.length = 0;
gdjs.GameSceneCode.GDtimeTxtObjects3.length = 0;
gdjs.GameSceneCode.GDtimeTxtObjects4.length = 0;
gdjs.GameSceneCode.GDRetryObjects1.length = 0;
gdjs.GameSceneCode.GDRetryObjects2.length = 0;
gdjs.GameSceneCode.GDRetryObjects3.length = 0;
gdjs.GameSceneCode.GDRetryObjects4.length = 0;
gdjs.GameSceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.GameSceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.GameSceneCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.GameSceneCode.GDNewTiledSpriteObjects4.length = 0;
gdjs.GameSceneCode.GDTransparentPanel_95955Objects1.length = 0;
gdjs.GameSceneCode.GDTransparentPanel_95955Objects2.length = 0;
gdjs.GameSceneCode.GDTransparentPanel_95955Objects3.length = 0;
gdjs.GameSceneCode.GDTransparentPanel_95955Objects4.length = 0;
gdjs.GameSceneCode.GDBackToGameButtonObjects1.length = 0;
gdjs.GameSceneCode.GDBackToGameButtonObjects2.length = 0;
gdjs.GameSceneCode.GDBackToGameButtonObjects3.length = 0;
gdjs.GameSceneCode.GDBackToGameButtonObjects4.length = 0;


return;

}

gdjs['GameSceneCode'] = gdjs.GameSceneCode;
