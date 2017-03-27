var tru=0;
 var horen=0;
    var minen=0;
    var horsa=0;
    var minsa=0;
    var totalm =0;
    var totala =0;
    var totalc =0;
    var totalT=0;
$(document).ready(function(){
   

    $("#frm1").submit(function (parametro){
        parametro.preventDefault();
        
        var veiculo="";
        var costo=0;
        var tiempo=0;
        var pla="";
        
        horen= parseInt($("#horaentrada").val());
        if(tru===0){
            tru=1;
        if(horen<0 || horen>23)
        {
            alert("la hora aceptada debe estar entre 0 y 23");
            tru=0;
        }        
        minen= parseInt($("#minutoentrada").val());
        if(minen<0 || minen>59)
        {
            alert("los minutos aceptadas deben estar entre 0 y 59");
            tru=0;
        }        
        horsa= parseInt($("#horasalida").val());
        if(horen<0 || horen>23)
        {
            alert("la hora aceptada debe estar entre 0 y 23");
            tru=0;
        }        
        minsa= parseInt($("#minutosalida").val());
        if(minen<0 || minen>59)
        {
            alert("los minutos aceptadas deben estar entre 0 y 59");
            tru=0;
        } 
        }
        else
        {        
        veiculo= $("#lista1").val();
        pla= $("#placa").val();
        
        tiempo= ((horsa - horen)*60)+(minsa - minen);
        
        if(veiculo ==="M" ) 
        {
            costo = tiempo* (600/60); 
            totalm = totalm + costo;
            
                    
            $("#tabmot").append("<tr>");
            $("#tabmot").append("<td>" + pla +"  </td>");
            $("#tabmot").append("<td>" + horen + ":" + minen + "</td>");
            $("#tabmot").append("<td>" + horsa + ":" + minsa + "</td>");
            $("#tabmot").append("<td>" + costo + "</td></tr>"); 
            $("#tabmot").append("<tr>");
            
            tru=0;
        }
        if(veiculo ==="A" ) 
        {
            costo = tiempo* (1800/60);
            totala = totala + costo;
            
            $("#tabaut").append("<tr>");
            $("#tabaut").append("<td>" + pla +"  </td>");
            $("#tabaut").append("<td>" + horen + ":" + minen + "</td>");
            $("#tabaut").append("<td>" + horsa + ":" + minsa + "</td>");
            $("#tabaut").append("<td>" + costo + "</td></tr>");
            tru=0;
        }
        if(veiculo ==="C" ) 
        {
            costo = tiempo* (2400/60); 
            totalc = totalc + costo;
            
            $("#tabcam").append("<tr>");
            $("#tabcam").append("<td>" + pla +"  </td>");
            $("#tabcam").append("<td>" + horen + ":" + minen + "</td>");
            $("#tabcam").append("<td>" + horsa + ":" + minsa + "</td>");
            $("#tabcam").append("<td>" + costo + "</td></tr>");
            tru=0;
        }
        
        totalT = totalm + totala + totalc;
        }
     
    });
});
