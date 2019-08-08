// vim: set syntax=javascript:

function main () {
    h=145.5; //height
    w=77.4; //width
    d=14.5;
    t=1.6;
    b=12; //cutout border
    v=7;
    gap=6;
    hg=0-gap/2;
    usbv=9;
    cliph=30;
    clipd=2;
    r=3;
    fn=20;
    entryh=5;
    clipupper=11.7;
    cliplip=3;
    //debug settings
    //cliph=5;
    //w=20;
    container=union(
        difference(
            difference(
                cube({
                    size: [
                        h+t*2,
                        w+t*2,
                        d+t+clipd
                    ],
                    round:true,
                    fn:fn,
                    radius:r
                }),
                cube({
                    size: [
                        h,
                        w,
                        d+clipd+r
                    ],
                    round:true,
                    radius:r,
                    fn:fn
                }).translate([t,t,t])
            ),
            // cutout bottom
            cube({
                size: [
                    h-(b*2),
                    w-r,
                    gap
                ],
                round:true,
                fn:fn,
                radius:r
            }).translate([t+b,t,hg]),
            //Camera button
            cube({
                size: [
                    25,
                    gap,
                    v
                ],
                round:true,
                fn:fn,
                radius:r
            }).translate([40,w+t+hg,(t+d)/2-(v/2)]),
            //power button
            cube({
                size: [
                    30,
                    gap,
                    v
                ],
                round:true,
                fn:fn,
                radius:r
            }).translate([115,w+t+hg,(t+d)/2-(v/2)]),
            //volume keys
            cube({
                size: [
                    40,
                    gap,
                    v
                ],
                round:true,
                fn:fn,
                radius:r
            }).translate([80,hg,(t+d)/2-(v/2)]),
            //usb
            cube({
                size: [
                    gap,
                    30,
                    usbv
                ],
                round: true,
                fn:fn,
                radius: r
            }).translate([hg,w*0.5-15,(t+d)/2-(usbv/2)]),
            //entry
                cube({
                    size: [
                        gap,
                        w,
                        d
                    ],
                    round:true,
                    fn:fn,
                    radius:r
                }).translate([h+t+hg,t,t+entryh-(t/2)])
        ),
        //entry rounding
        cylinder({
            r:t/2,
            h:w
        })
        .rotateY(90)
        .rotateZ(90)
        .translate([h+t+(t/2),t,t+entryh]));
        clip=union(
            cylinder({
                r:clipd/2,
                h:w+t*2
            }).scale([4,1,1])
            .rotateX(-90)
            .translate([clipd/2+3,0,(clipd/2)]),
            cylinder({
                r:clipd/2,
                h:w+t*2
            }).scale([4,1,1])
            .rotateX(-90)
            .translate([cliph-(clipd/2)-3,0,(clipd/2)]),
            cube({
                size: [
                    cliph,
                    clipd,
                    clipupper+clipd+t
            ]}).translate([0,0,(clipd/2)-t]),
            //cliplip
            cube({
                size: [
                    cliph,
                    cliplip+0.7+(clipd/2),
                    clipd
            ]}).translate([0,clipd/2,clipupper+clipd]),
            cylinder({
                r:clipd/2,
                h:cliph
            })
            .rotateY(90)
            .translate([0,clipd/2,clipupper+clipd+(clipd/2)]),
            cube({
                size: [
                    cliph,
                    6.68,
                    clipd
                ],
            })
            .translate([0,-0.5,0])
            .rotateX(-35.6)
            .translate([0,cliplip+clipd,clipupper+clipd]),
            cube({
                size: [
                    cliph,
                    10,
                    clipd
            ]}).translate([0,10,clipd+8]),
            cylinder({
                r:clipd/2,
                h:cliph
            })
            .rotateY(90)
            .translate([0,20,clipd+8+(clipd/2)])

        )
        .translate([(h+t*2)/2-(cliph/2),0,d+t]);

        stabilizer=union(
            cube({
                size: [
                    cliph,
                    clipd,
                    clipd+8+clipd
            ]}).translate([0,0,(clipd/2)-t]),
            cylinder({
                r:clipd/2,
                h:cliph
            })
            .rotateY(90)
            .translate([0,clipd/2,clipd+8+(clipd/2)]),
            cube({
                size: [
                    cliph,
                    10,
                    clipd
            ]}).translate([0,clipd/2,clipd+8]),
            cylinder({
                r:clipd/2,
                h:cliph
            })
            .rotateY(90)
            .translate([0,10,clipd+8+(clipd/2)])

        )
        .rotateZ(-90)
        .translate([0,(w+t*2)-t,d+t]);
        return center(
            [true, true, false],
            union(
                container,
                clip,
                stabilizer
            )
        );
}
