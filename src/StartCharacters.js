
const partyMembers = ["StronkBoi", "MagicBois", "Healboi", "SneakyBois"];
const partyLead = "StronkBoi";

function loadTeam()
{
	partyMembers.forEach((charName, index) => {
    if(!Object.keys(get_active_characters()).includes(charName)){
        start_character(charName, "Main")
    }
	})
}
function unloadTeam() {
	const activeBois = get_active_characters();
	const nameArr = Object.keys(activeBois);
	nameArr.forEach((name) => {
		if(name !== partyLead ){
			stop_character(name);
		}
	});

}

function initparty() {
	for (const charName of partyMembers) {
		if(!Object.keys(get_party()).includes(charName)){
			send_party_invite(charName);
		}
	}
}

//loadTeam()
unloadTeam()

