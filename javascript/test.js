config = {pgn: '1.Nf3 Nf6 2.g3 d5 3.Bg2 e6 4.O-O Nbd7 5.d3 b6 6.c4 Bb7 7.cxd5 exd5 8.Nc3 \
Be7 9.e4 dxe4 10.dxe4 Nc5 \
    {White has a central pawn majority and the e-pawn gives him a central \
    space advantage. Black\'s King isn\'t castled yet, which gives White \
    some options that a caslted King wouldn\'t offer him (like opening up \
    the center). White also have a potential hole on c6 and a nice outpost \
    on f5.} \
11.Nd4!  \
    {Immediately targets both c6 and f5} \
11...O-O  \
    ( 11...Nfxe4 12.Nxe4 Bxe4 13.Bxe4 Nxe4 14.Re1 Nf6 15.Qe2 ) \
12.e5! Bxg2  \
    {Perhaps Black should have tried 12... Nd5. After 12... Bxg2 White  \
    gains access to the c6 square} \
    ( 12...Nd5 13.Nc6 Bxc6  \
        ( 13...Nxc3 14.Nxd8 Nxd1 15.Nxb7 ) \
    14.Nxd5 Bxd5  \
        ( 14...Bb5!? 15.Re1 Rc8 16.Qg4 ) \
    15.Bxd5 {Gives White two active Bishops in an open position} ) \
13.Kxg2 Nd5 14.Nc6  \
    {A Godzilla of Knights} \
14...Nxc3 15.bxc3 Qe8 16.Qd5  \
    {The c6-Knight paralyzes Black\'s whole army. He\'s far from dead, but  \
    such an unpleasant defensive task is not easy to deal with and Black  \
    fell apart very quickly.} \
16...Kh8?  \
    {He could keep his disadvantage to a minimum with 16...Na4} \
    ( 16...Na4 17.Bd2 Bc5 ) \
17.Ba3 f5 18.f4 Rg8 19.Rad1 Bf8 20.Nd8!  \
    {Usually the 8th and 7th rank is not ideal for the Knight, but here  \
    White threatens 21. Nf7+ and 21. Qxa8 which wins on the spot} \
20...Rxd8 21.Qxd8 Qa4 22.Bxc5 Bxc5 23.Qd2 Qe4+ 24.Rf3 \
    {1-0}', position: 'start', showCoords: false, orientation: 'white', theme: 'default', pieceStyle: 'wikipedia', figurine: '', locale: 'en', timerTime: '', width: '1200px', boardSize: '700px', layout: 'left', showFen: false, coordsInner: false, headers: false, coordsFactor: '1.0', coordsFontSize: '', colorMarker: '', startPlay: '', hideMovesBefore: true, notation: 'short', notationLayout: 'inline', };
PGNV.pgnView('board', config);
