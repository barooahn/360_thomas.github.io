function buildingSpin(e,i){spin.bind("onLoad",function(){api.data;console.log("loaded"),$(".rotateButton").css({opacity:0,display:"inline-block"}).animate({opacity:1},"slow")}).bind("onFrame",function(e,i){13==i.frame?(setTimeout(showHideOverLay(!1),1e3),console.log("data reverse:"+i.reverse),i.reverse=!0):0==i.frame?i.reverse=!1:12==i.frame&&showHideOverLay(!0)}),api.playTo(e)}function showHideOverLay(e){e?$("#frontOverlayContainer").css({opacity:0,display:"none"}):$("#frontOverlayContainer").css({opacity:0,display:"block"}).animate({opacity:1},"slow")}var nextMove="back",frames=SpriteSpin.sourceArray("img/No_Furn/test_fur_off.RGB_color.{frame}.png",{frame:[0,13],digits:4}),details=[0,13],detailIndex=0,spin=$("#noFurn");spin.spritespin({source:frames,width:600,sense:2,height:700,sizeMode:"fit",scrollThreshold:3e3,frameTime:20,detectSubsampling:!1,animate:!1});var api=spin.spritespin("api");$(".rotateButton").click(function(){"forward"==nextMove?(buildingSpin(0,!0),nextMove="back"):(buildingSpin(13,!1),nextMove="forward")}),$(".hotspotFront").mousemove(function(e){$("span",this).css({left:e.pageX-700,top:e.pageY-300})}),buildingSpin(0,!0),$(".li1").click(function(e){$("#myModal").modal("show")});