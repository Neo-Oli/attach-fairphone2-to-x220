function main () {
    h=145.5;
    w=77.5;
    d=15;
    t=1.5;
    b=12;
    v=7;
    gap=5;
    hg=0-gap/2
    usbv=9;
    cliph=30;
    clipd=2;
    r=1;
    clipupper=11.4;
    return center(
        [true, true, false],
        union(
            difference(
                cube({
                    size: [
                        h+t*2,
                        w+t*2,
                        d+t+clipd
                    ]}),
                cube({
                    size: [
                        h,
                        w,
                        d+clipd
                    ]}).translate([t,t,t]),
                // cutout bottom
                cube({
                    size: [
                        h-(b*2),
                        w,
                        gap
                    ],
                    round:true,
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
                    radius:r
                }).translate([h+t+hg,t,t+5])
            ),
            //clip
            union(
                cube({
                    size: [
                        cliph,
                        w+t*2,
                        clipd
                    ]}),
                cylinder({
                    r:clipd/2,
                    h:w+t*2
                })
                .rotateX(-90)
                .translate([0,0,(clipd/2)]),
                cylinder({
                    r:clipd/2,
                    h:w+t*2
                })
                .rotateX(-90)
                .translate([cliph,0,(clipd/2)]),
                cube({
                    size: [
                        cliph,
                        clipd,
                        clipupper
                    ]}).translate([0,0,clipd]),
                difference(
                    cube({
                        size: [
                            cliph,
                            10.5622,
                            clipd
                        ],
                    })
                    .rotateX(-18.7)
                    .translate([0,0,clipupper+clipd]),
                    cube({
                        size: [
                            cliph,
                            10.5622,
                            clipd
                        ],
                    })
                    .rotateX(25)
                    .translate([0,0,clipupper+clipd+(clipd/3)])
                ),
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
            .translate([(h+t*2)/2-(cliph/2),0,d+t])
        )
    );
}
