$(document).ready(function() {

    $(function() {
      $.scrollify({
        section : ".sect",
      });
    });

	$(".carousel-caption").animate({ 
        marginLeft: "+=9999px",
    }, 1000 );
	
	let sections = $('section'), nav = $('nav')	, nav_height = 100;
 
	$(window).on('scroll', function () {
  		let cur_pos = $(this).scrollTop();
		sections.each(function() {

    		let top = $(this).offset().top - nav_height, 
    		    bottom = top + $(this).outerHeight(),
    		    menuColor = $(this).attr('menuColor');
    		if (cur_pos >= top && cur_pos <= bottom) {

			
				if (menuColor == "black"){
					nav.removeClass('navbar-dark');
					nav.addClass('navbar-light');
				}
				else {
					nav.removeClass('navbar-light');
					nav.addClass('navbar-dark');
				}
				nav.find('a').removeClass('active');
				nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');

				//sections.removeClass('active');
				//$(this).addClass('active');
    		}
  		});

  		if (cur_pos <= 500) {
			$('#backToTop').hide(200);
		}else {
			$('#backToTop').show(200);
		}
	});

	nav.find('a').on("click", function(){
		event.preventDefault();
		$(".navbar-collapse").collapse('hide');
		id = $(this).attr("href");
		scrollToID(id, 200);
	});

	$('#backToTop').on('click',function(){
		$("html, body").animate({ scrollTop: "0" });
	});
});

/////////////////////////////////////////////////////////////////////////////////////////////

function scrollToID(id, speed){
	let targetOffset = $(id).offset().top;
	$('html,body').animate({scrollTop:targetOffset}, speed);
}

let x = 13;
let y = 13;
let n = 0;
let dead = 0;
let alive = 0;

//let arr = Array(10).fill(0).map(() => Array(10).fill(0));
//let arr = Array.from(Array(10).fill(0), () => new Array(10).fill(0))
let cells = Array(x).fill(0).map(x => Array(y).fill(0));
let cellsP = Array(x).fill(0).map(x => Array(y).fill(0));
let cellsN = Array(x).fill(0).map(x => Array(y).fill(0));
let cellsA = Array(x+2).fill(0).map(x => Array(y+2).fill(0));
let cellsB = Array(x+2).fill(0).map(x => Array(y+2).fill(0));


function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

for (let i = 0; i < x; i++) {
	for (let j = 0; j < y; j++) {
		cells[i][j] = randomInteger(0, 1);
	}
}

for (let i = 0; i < x; i++) {
	r = (i < 10) ? "0"+i : i;
	$('#live').append('<div class="row" id="row' + r + '"></div>');
	for (let j = 0; j < y; j++) {
		a = (i < 10) ? "0"+i : i;
		b = (j < 10) ? "0"+j : j;
		if (cells[i][j] == 0){
		dead = dead + 1;
		$('#row'+r).append('<div class="btn btn-warning" id="cell' + a + b +'"><i class="fas fa-skull-crossbones"></i></div>');
		} else {
		alive = alive + 1;
		$('#row'+r).append('<div class="btn btn-success" id="cell' + a + b +'"><i class="fas fa-user"></div>');
		}
		$('#cell'+a+b).click(function() {
 			clickon(i,j);
		});

}}
$('#cont').append('<div class="btn btn-dark btn-lg" id="run">START</div>');
$('#cont').append('<div id="info"></div>');

$('#run').on('click',function(){
	let t = setInterval(() => run(), 2000);
});

function run(){
	cellsP = cells;
	cells = tern(cells);
	drow(cells);
	$('#info').replaceWith('<div id="info"><h2>Dead '+ dead +' Alive '+ alive + '</h2></div>');
}

function tern(cells) {
	dead = 0;
	alive = 0;
	for (let i = 0; i < x; i++) {
		for (let j = 0; j < y; j++) {
			cellsA[i+1][j+1] = cells[i][j];
		}	
	}
	for (let i = 1; i < x+1; i++) {
		for (let j = 1; j < y+1; j++) {
			n = neib(cellsA,i,j);
			if (cellsA[i][j] == 0 & n == 3){
				cellsB[i][j] = 1;
			} else if (cellsA[i][j] == 1 & n > 3){
				cellsB[i][j] = 0;
			} else if (cellsA[i][j] == 1 & n < 2){
				cellsB[i][j] = 0;
			} else {
				cellsB[i][j] = cellsA[i][j];
			}
		}	
	}
	for (let i = 0 ; i < x; i++) {
		for (let j = 0; j < y; j++) {
                cellsN[i][j] = cellsB[i+1][j+1];
	}}

							console.log(JSON.stringify(cells));
							console.log(JSON.stringify(cellsP));
							console.log(JSON.stringify(cellsN));

	return(cellsN);
}

function neib(cellsarr,i,j){
	n = 0;
	for (let ni = i-1; ni < i+2; ni++) {
		for (let nj = j-1; nj < j+2; nj++) {
			if (ni == i && nj == j) {
			} else {
				n = n + cellsarr[ni][nj];
			}
		}
	}
	return n;
}

function drow(cellsarr){
	for (let i = 0; i < x; i++) {
		for (let j = 0; j < y; j++) {
			a = (i < 10) ? "0"+i : i;
			b = (j < 10) ? "0"+j : j;
			if (cellsarr[i][j] == 0){
				dead = dead + 1;
				$('#cell'+a+b).replaceWith('<div class="btn btn-warning" id="cell' + a + b +'"><i class="fas fa-skull-crossbones"></i></div>');
			} else {
				alive = alive + 1;
				$('#cell'+a+b).replaceWith('<div class="btn btn-success" id="cell' + a + b +'"><i class="fas fa-user"></div>');
			}
			$('#cell'+a+b).click(function() {
 				clickon(i,j);
			});
	}}
}

function clickon(i,j){
	console.log(i,j);
	console.log(cells[i][j]);
	a = (i < 10) ? "0"+i : i;
	b = (j < 10) ? "0"+j : j;
	if (cells[i][j] == 1){
		dead = dead + 1;
		cells[i][j] = 0;
		$('#cell'+a+b).replaceWith('<div class="btn btn-success" id="cell' + a + b +'"><i class="fas fa-user"></div>');
	} else {
		alive = alive + 1;
		cells[i][j] = 1;
		$('#cell'+a+b).replaceWith('<div class="btn btn-success" id="cell' + a + b +'"><i class="fas fa-user"></div>');
	}
	drow(cells);
}
