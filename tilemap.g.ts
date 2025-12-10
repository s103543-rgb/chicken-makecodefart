// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000002000000000000000000000000000002000000000000000000000000000002000000000000000000000000000002000000000000000000000000000002010000000100000000000000000002000000000000000000000000000002000003030303030000000000000000000003000000000003030303000303030303000000000000000000030000000000000000000000000000000300000000000000000000000000000003030303030303030303030303`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . 2 . 
. . . . . . . . . . . . . 2 . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . 2 . . . . 
. . . . . . . . . . 2 2 . . . 2 
. . . . . . . . . 2 . . . . . . 
. . . . . . . . 2 . . 2 2 2 2 2 
. . . . . . . . . . 2 . . . . . 
2 2 2 2 . 2 2 2 2 2 . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath2,sprites.builtin.oceanDepths0,sprites.builtin.coral0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
