/**
 * confirmacao de exclusao de um contato
 * @autor alexandre (curso prof jose)
 * @param idcon
 */

function confirmar(idcon){
	let resposta = confirm("Confirma a exclusão deste contato? ")
	
	if (resposta  === true){
		//encaminha ao servlet o contato que sera excluido
		window.location.href = "delete?idcon="+ idcon 
	}
}