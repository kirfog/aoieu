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
		scrollToID(id, 350);
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

let x = 10;
let y = 10;
let n = 0;

//let arr = Array(10).fill(0).map(() => Array(10).fill(0));
//let arr = Array.from(Array(10).fill(0), () => new Array(10).fill(0))
let cells = Array(x).fill(0).map(x => Array(y).fill(0));
let cellsA = Array(x+2).fill(0).map(x => Array(y+2).fill(0));
let cellsB = Array(x+2).fill(0).map(x => Array(y+2).fill(0));
let cellsN = Array(x).fill(0).map(x => Array(y).fill(0));

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
	$('#live').append('<div class="row " id="row' + i + '"></div>');
	for (let j = 0; j < y; j++) {
		if (cells[i][j] == 0){
		$('#row'+i).append('<div class="btn btn-warning btn-sm" id="cell' + i + j +'"><i class="fas fa-skull-crossbones"></i></div>');
		} else {
		$('#row'+i).append('<div class="btn btn-success btn-sm" id="cell' + i + j +'"><i class="fas fa-user"></div>');	
		}
}}

$('#live').append('<div class="btn btn-dark btn-lg" id="run"></div>');

$('#run').on('click',function(){
	let timerId = setInterval(() => run(), 2000);
});

function run(){
	cells = tern(cells);
	drow(cells);
}

function tern(cells) {
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
	for (let i = 1; i < x; i++) {
		for (let j = 1; j < y; j++) {
                cellsN[i][j] = cellsB[i+1][j+1]
	}}
	console.table(cellsN);
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
	//console.log(" Ось Х " + i + " Ось Y " + j + " Соседей " + n);
	return n;
}

function drow(cellsarr){
	for (let i = 0; i < x; i++) {
		for (let j = 0; j < y; j++) {
			if (cellsarr[i][j] == 0){
				$('#cell'+i+j).replaceWith('<div class="btn btn-warning btn-sm" id="cell' + i + j +'"><i class="fas fa-skull-crossbones"></i></div>');
			} else {
				$('#cell'+i+j).replaceWith('<div class="btn btn-success btn-sm" id="cell' + i + j +'"><i class="fas fa-user"></div>');
			}
	}}
}