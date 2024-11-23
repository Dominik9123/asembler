function simulateMOV() {
    let AX = document.getElementById('ax').value;
    
    let BX = document.getElementById('bx').value;
    
    let CX = document.getElementById('cx').value;
    
    let DX = document.getElementById('dx').value;

    AX = parseInt(AX, 16);
    BX = parseInt(BX, 16);
    CX = parseInt(CX, 16);
    DX = parseInt(DX, 16);

    AX = BX;
    CX = DX;
    BX = AX;
    DX = CX;

    document.getElementById('ax').value = `0x${AX.toString(16).toUpperCase()}`;
    
    document.getElementById('bx').value = `0x${BX.toString(16).toUpperCase()}`;

    document.getElementById('cx').value = `0x${CX.toString(16).toUpperCase()}`;

    document.getElementById('dx').value = `0x${DX.toString(16).toUpperCase()}`;

}