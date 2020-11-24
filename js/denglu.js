var smc = document.getElementById("sm");
		var dld = document.getElementById("zh");
		var dljm = document.getElementById("zhdl");
		var smdl = document.getElementById("smdl");

		function sm() {
			smc.style.color = "#f56600";
			dld.style.color = "black";
			dljm.style.visibility = "hidden";
			smdl.style.visibility = "visible";

		}

		function dl() {
			smc.style.color = "black";
			dld.style.color = "#f56600";
			dljm.style.visibility = "visible";
			smdl.style.visibility = "hidden";
		}