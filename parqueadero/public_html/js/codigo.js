
$(document).ready(function(){
    var horen=0;
    var minen=0;
    var horsa=0;
    var minsa=0;
    var totalm =0;
    var totala =0;
    var totalc =0;
    var totalT=0;

    $("#frm1").submit(function (parametro){
        parametro.preventDefault();
        
        var veiculo="";
        var costo=0;
        var tiempo=0;
        var pla="";
        
        horen= parseInt($("#horaentrada").val());
        if(horen<0 || horen>23) alert("la hora aceptada debe estar entre 0 y 23");
        
        minen= parseInt($("#minutoentrada").val());
        if(minen<0 || minen>59) alert("los minutos aceptadas deben estar entre 0 y 59");
        
        horasa= parseInt($("#horasalida").val());
        if(horen<0 || horen>23) alert("la hora aceptada debe estar entre 0 y 23");
        
        minsa= parseInt($("#horasalida").val());
        if(minen<0 || minen>59) alert("los minutos aceptadas deben estar entre 0 y 59");
        
        
        veiculo= $("#lista1").val();
        pla= $("#placa").val();
        
        tiempo= ((horsa - horen)*60)+(minsa - minen);
        
        if(veiculo ==="M" ) 
        {
            costo = tiempo* (600/60); 
            totalm = totalm + costo;
                    
            $("#tabmot").append("<tr>");
            $("#tabmot").append("<td>" + pla +"  </td>");
            $("#tabmot").append("<td>" + horen + ":" + minen + " = </td>");
            $("#tabmot").append("<td>" + horsa + ":" + minsa + " = </td>");
            $("#tabmot").append("<td>" + costo + "</td></tr>");   
           $("#tabmot").append("<tr>"+"total: $"+totalm+ "</tr"> ); 
                  
        }
        if(veiculo ==="A" ) 
        {
            costo = tiempo* (1800/60);
            totala = totala + costo;
            
            $("#tabaut").append("<tr>");
            $("#tabaut").append("<td>" + pla +"  </td>");
            $("#tabaut").append("<td>" + horen + ":" + minen + " = </td>");
            $("#tabaut").append("<td>" + horsa + ":" + minsa + " = </td>");
            $("#tabaut").append("<td>" + costo + "</td></tr>"); 
        }
        if(veiculo ==="C" ) 
        {
            costo = tiempo* (2400/60); 
            totalc = totalc + costo;
            
            $("#tabca").append("<tr>");
            $("#tabca").append("<td>" + pla +"  </td>");
            $("#tabca").append("<td>" + horen + ":" + minen + " = </td>");
            $("#tabca").append("<td>" + horsa + ":" + minsa + " = </td>");
            $("#tabca").append("<td>" + costo + "</td></tr>"); 
        }
        
        totalT = totalm + totala + totalc;
      

      
    });    
