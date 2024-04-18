/*
    # Desafio 03: Escrevendo as Classes de um Jogo

    ## O que deve ser utilizado:
    - Variáveis
    - Operadores
    - Laços de repetição
    - Estruturas de decisões
    - Funções
    - Classes e Objetos

    ## Objetivo
    - Crie uma classe generica que represente um herói de uma
    aventura e que possua as seguintes propriedades
        - Nome
        - Idade
        - Tipo (ex.: Guerreiro, Mago, Monge, Ninja)

    - Além disso, deve ter um método chamado atacar que deve
    atender os seguintes requisitos:
        - Exibir a mensagem "o {tipo} atacou usando {ataque}"
        - Aonde o {tipo} deve ser concatenado o tipo que está na
        propriedade da classe
        - E no {ataque} deve seguir uma descrição diferente
        conforme o tipo, seguindo a tabela abaixo:
            - Se mago -> no ataque exivir (usou magia)
            - Se guerreiro -> no ataque exibir (usou espada)
            - Se monge -> no ataque exibir (usou artes marciais)
            - Se ninja -> no ataque exibir (usou shuriken)

    ## Saída
    - Ao final deve se exibir uma mensagem:
        - "O {tipo} atacou usando {ataque}"
*/

class Hero {
	nome: string;
	idade: number;
	tipo: string;

	constructor(nome: string, idade: number, tipo: string) {
		this.nome = nome;
		this.idade = idade;
		this.tipo = tipo;
	}

	atacar(): void {
		let ataque: string;
		switch (this.tipo) {
			case "mago":
				ataque = "usou magia";
				break;
			case "guerreiro":
				ataque = "usou espada";
				break;
			case "monge":
				ataque = "usou artes marciais";
				break;
			case "ninja":
				ataque = "usou shuriken";
				break;
			default:
				ataque = "usou um ataque desconhecido";
				break;
		}
		console.log(`O ${this.tipo} atacou usando ${ataque}`);
	}
}

// Exemplo de uso
const heroi1 = new Hero("Aragorn", 35, "guerreiro");
const heroi2 = new Hero("Gandalf", 1021, "mago");

heroi1.atacar(); // Saída: O guerreiro atacou usando espada
heroi2.atacar(); // Saída: O mago atacou usando magia
