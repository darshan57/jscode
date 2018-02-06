(function(){
	var afterLoad = function(){
			var navArray = ["Home","Admission","Programme","Placements","Courses"];
			var navTemplate = '';
			for(let elem of navArray){
				navTemplate += `<ul>${elem}</ul>`
			}
			$(".navContainer").append(navTemplate);
			$(".navContainer ul").on("click",function(event){
				var targetNode = event.target.innerText;
				$("#mainContent").html($("#mainContentContainer").html());
				$(".contentRegion").html(targetNode);
				$(".footerRegion").html($("#footerContainer").html());
			});
		}
		document.addEventListener("DOMContentLoaded",afterLoad);
}()
);