
        let thescore = [0,0];
        let result = '';
       
        const computerPlay = () => {
            let n = Math.floor(Math.random()  *3);
	        if (n === 0){
		        return 'rock';
	        }else if (n === 1) {
		        return 'raper';
	        } else {
		        return 'scissors';
	        }
        }

        const playerPlay = () => {
            let selection = prompt('Enter Rock, Scissors, or Paper', 'Choose a value');
            if(selection != null){
                 selected = selection.toLowerCase();
            }
            if(selected === 'rock'){
                return 'rock';
            }
            else if(selected === 'paper'){
                return 'paper';
            }
            else if(selected === 'scissors'){
                return 'paper';
            }
           else{
                alert('invalid selection');
            }
        }
            
        const playRound = (playerSelection, computerSelection, score) => {
             score = thescore;
             if(
                 ((playerSelection === 'rock') && (computerSelection === 'scissors')) || 
                 ((playerSelection === 'paper') &&(computerSelection === 'rock')) || 
                 ((playerSelection === 'scissors') && (computerSelection === 'paper'))
               ){
                   score[0]++;
                   console.log(`you win! ${playerSelection} beats ${computerSelection}`);
                   
               }else{
                   score[1]++;
                   console.log(`computer win! ${computerSelection} beats ${playerSelection}`);
                   
               }
            
        }


        const playGame = () => {
            for(let i = 0; i < 5; i++){
                playRound(playerPlay(), computerPlay(), thescore);
               
            }
            if(thescore[0] > thescore[1]){
                console.log(result = 'You win!');
            }else if(thescore[0]< thescore[1]){
                console.log(result = 'You loose!');
            }else{
                console.log(result = 'Tie!');
            }
            console.log(`Final score is PLAYER ${thescore[0]} vs COMPUTER ${thescore[1]}`);
    
        }

        document.getElementById('letstart').addEventListener('click', playGame);
