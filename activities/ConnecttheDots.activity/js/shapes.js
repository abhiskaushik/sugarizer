define(function (require) {

        var triangle = [[400, 150], [550, 400], [250, 400], [400, 100]];
        var square = [[250, 100], [600, 100], [600, 400], [200, 400],
		      [200, 100]];
        var circle = [[175, 400], [150, 300], [200, 100], [400, 50], [600, 100],
                      [650, 300], [600, 500], [400, 550], [200, 500]];
	var star = [[400, 100], [200, 500], [650, 200], [150, 200], [600, 500],
		   [400, 50]];
        var flower = [[293, 16], [352, 101], [422, 20], [462, 120], [436, 257],
                      [334, 316], [324, 476], [550, 268], [555, 395],
		      [479, 530], [343, 558], [242, 558], [60, 487], [40, 263],
                      [252, 471], [264, 321], [155, 258], [131, 121],
                      [171, 26], [243, 91]];
	var cat = [[420,  93], [450, 104], [492,  63], [513, 152], [488, 203],
		   [500, 275], [445, 361], [447, 430], [478, 490], [392, 405],
                   [333, 461], [379, 483], [210, 499], [ 98, 526], [106, 571],
                   [ 54, 518], [178, 446], [210, 340], [282, 239], [401, 198],
                   [385,  83]];
        var hand = [[175, 150], [200, 125], [280, 220], [330, 200], [425, 25],
                    [440, 175], [540, 50], [480, 210], [620, 100], [520, 280],
                    [680, 270], [520, 330], [420, 420], [400, 450], [280, 450],
                    [260, 340], [200, 200]];
        var baby = [[300,   0], [345,  50], [313, 175], [358, 206], [475, 367],
                    [370, 313], [370, 408], [434, 501], [311, 600], [348, 504],
                    [300, 463], [210, 504], [248, 600], [124, 487], [191, 401],
                    [191, 303], [ 76, 367], [216, 205], [248, 175], [213,  50]];
        var moon = [[479, 530], [300, 419], [254, 286], [300, 137], [476, 45],
                    [293, 16], [160, 78], [76, 233], [122, 447], [294, 552]];
        var bird = [[557, 127], [492, 165], [493, 287], [444, 388], [317, 448],
                    [311, 496], [332, 536], [384, 558], [284, 558], [277, 436],
                    [165, 425], [25, 475], [75, 436], [25, 435], [212, 309],
                    [377, 183], [419, 111], [460, 87], [505, 106]];
        var fish = [[354, 25], [412, 80], [515, 130], [571, 202], [523, 220],
                    [549, 255], [418, 301], [322, 369], [353, 311], [243, 297],
                    [99, 224], [25, 319], [55, 182], [25, 52], [99, 147],
                    [234, 75], [356, 70]];
        var lightning = [[391, 25], [247, 50], [152, 299], [281, 293],
                         [209, 554], [430, 195], [285, 210], [363, 73]];
        var shapes = [triangle, square, circle, star, lightning,
                      moon, flower, fish, bird, cat, hand, baby];

    return shapes;
});
