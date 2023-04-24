import logo from './assets/logo.svg';
import styles from './App.module.scss';
import { Question, QuestionProps } from './components/question/question';
import {useState} from 'react';
import { Personnalite, PersonnaliteProps, PersonnaliteStr } from './components/personnalite/personnalite';
import { totalmem } from 'os';

function get_question(nb : number, answers : Array<string>, answer_nb : Array<number>) : QuestionProps | undefined {
    if (nb == 0) {
        return { 
            question: "Entrez votre identité ", 
            answers: ["hey"], 
            points: false,
            is_input: true, 
        }
    }
    else if (nb == 1) {
        return { 
            question: "Quel âge avez-vous ? ", 
            answers: ["lol"], 
            points: false,
            is_input: true 
        }
    }
    else if (nb == 2) {
        return { 
            question: "Qui êtes-vous, "+ answers[0]+" ?" , 
            points: [
                {'egoiste' : 2, 'leader' : 1}, 
                {'hermite' : 2, 'reveur' : 1}, 
                {'leader' : 2, 'egoiste' : 1}, 
                {'reveur' : 2, 'amoureux' : 1}, 
                {'survivant' : 2,"reveur":1}, 
                {'amoureux' : 2},
                {'robot' : 2}
            ],
            answers: [
                "Cela dépend de qui demande, un dieu peut-être?", 
                "Je ne sais pas encore, je suis en permanence en train d'essayer de comprendre", 
                "Je suis le seul et l'unique moi", 
                "Une âme enfermée dans un corps", 
                "Pourquoi as-tu besoins de le savoir?", 
                "Une créature sur terre", 
                answers[0] + ", clairement"
            ], 
             is_input: false 
        }
    }
    else if (nb == 3) {
        return { 
            question: answers[0] + ", puis-je vous tutoyer?", 
            points: [
                {'hermite' : 2}, 
                {'reveur' : 2}, 
                {'amoureux' : 2}, 
                {'leader' : 2},
                {'survivant':2}, 
                {'robot' : 2}, 
                {'egoiste' : 2}
            ],
            answers: [
                "C'est gentil de demander", 
                "Pourquoi pas", 
                "Certainement", 
                "Je m'en fiche",
                "Non", 
                "Oui", 
                "Qui penses-tu être pour me demander une chose pareille ? "
            ], 
            is_input: false 
        }
    }
    let positif_tu = [0, 1, 2, 3, 5]
    let tu_str = positif_tu.includes(answer_nb[3]) ? 'tu' : 'vous';
    let tu = (tu : string, vous : string) => tu_str === 'tu' ? tu : vous

    if (tu_str == 'tu' && nb == 4) {
        return { 
            question: "Merci, " + answers[0] + ".", 
            points: false,
            answers: [
                "De rien"
            ], 
            is_input: false 
        }
    }
    if (tu_str == 'vous' && nb == 4) {
        return { 
            question: "Pardonnez-moi, " + answers[0] + ".", 
            points: false,
            answers: ["Ok"], 
            is_input: false 
        }
    }
    else if (nb == 5) {
        return { 
            question: answers[0] + `, choisi la forme que ${tu("tu préfères", "vous préfèrez")}`, 
            points: [
                {'egoiste' : 2, "robot": 1},
                {'reveur' : 2},
                {'amoureux' : 2},
                {'leader' : 2, "reveur" : 1 },
                {'hermite' : 2},
                {'robot' : 2, "leader" : 1},
                {'survivant' : 2}
            ],
            answers: [
                "∎ (carré)", 
                "✦ (étoile à quatre côtés)", 
                "♥ (coeur)", 
                "★ (étoile à cinq côtés)", 
                "● (cercle)", 
                "▲ (triangle)", 
                "Je n'ai aucune préférence"
            ], 
            is_input: false 
        }
    }
    else if (nb == 6) {
        return { 
            question: answers[0] + `, quel mot ${tu("te", "vous")} décrit le mieux?`, 
            points : [
                {'reveur' : 2},
                {'robot' : 2},
                {'hermite' : 2},
                {'survivant' : 2, "leader" : 1},
                {'leader' : 2, "survivant" : 1},
                {'amoureux' : 2},
                {'egoiste' : 2}
            ],
            answers: [
                "Curieux", 
                answers[0], 
                "Sage", 
                "Persévérant", 
                "Déterminé", 
                "Passionné", 
                "Parfais"
            ], 
            is_input: false 
        }
    }
    else if (nb == 7) {
        return { 
            question: `Si un jour ${tu("tu mourrais", "vous mourriez")}, ` + answers[0] + `, en quoi ${tu("voudrais-tu", "voudriez-vous")} le plus ${tu("te", "vous")} réincarner?`, 
            points: [
                {'survivant' : 2, "hermite" : 1},
                {'robot' : 2},
                {'hermite' : 2},
                {'reveur' : 2},
                {'amoureux' : 2},
                {'leader' : 2},
                {'egoiste' : 2, "leader" : 1}
            ],
            answers: [
                "Un arbre",
                "Un humain",
                "J'aimerais ne pas me réincarner",
                "Un alien",
                "Un capybara",
                "Un phoénix",
                "Un Dieu"
            ],
            is_input: false
        }
    }
    else if (nb == 8) {
        return { 
            question: ` Intéressant... Et comment ${tu("voudrais-tu", "voudriez-vous")} que les gens se souviennent de ${tu("toi", "vous")}?`,
            points:[
                {'reveur' : 2},
                {'robot' : 2},
                {'leader' : 2},
                {'hermite' : 2},
                {'egoiste' : 2},
                {'amoureux' : 2},
                {'survivant' : 2}
            ],
            answers: [
                "Comme quelqu'un d'inspirant",
                "Comme une bonne personne?",
                "Comme quelqu'un qui à changé le monde",
                "Chacun se souviendra de moi à leurs manières",
                "Comme une personne supérieure aux autres",
                "Comme quelqu'un d'aimant avec qui ils ont partagés de bon souvenirs",
                "Comme quelqu'un qui n'a jamais arrêter de se battre"
            ],
            is_input: false
        }
    }
    else if (nb == 9) {
        return { 
            question: " Entre toutes les activités ci-dessous, " + answers[0] + `, laquelle ${tu("te", "vous")} semble la plus attirante?`,
            points: [
                {'robot' : 2, 'reveur' : 1},
                {'survivant' : 2, 'robot' : 1},
                {'hermite' : 2, 'reveur' : 1},
                {'leader' : 2, 'egoiste' : 1},
                {'reveur' : 2, 'hermite' : 1},
                {'amoureux' : 2},
                {'egoiste' : 1, 'leader' : 1, "reveur" :1 },
                {'robot' : 2}
            ],
            answers: [
                "Jouer aux jeux vidéo",
                "Faire quelque chose de productif",
                "Lire un livre",
                "Faire la fête",
                "Faire quelque chose de créatif",
                "Aller picknicker avec des amis",
                "Débatre de sujet contreversé",
                "Je préfères ne rien faire"
            ],
            is_input: false
        }
    }
    let age = parseInt(answers[1]);
    if (nb == 10) {
        return { 
            question: `Et si ${tu("tu pouvais", "vous pouviez")} donner un conseil à ${tu("ton", "votre")} plus jeune ${tu("toi", "vous")}, lequel serait-il? `, 
            points: [
                {'reveur' : (age < 18 ? 2: 0), 'egoiste' : (age > 18 ? 2 : 0)},
                {'leader' : 2, "survivant" : 1},
                {'hermite' : 2},
                {'amoureux' : 2},
                {'egoiste': 2, 'survivant' : 1},
                {'robot' : 2},
                {'reveur' : 2}
            ],
            answers: [
                "Je suis encore jeune !",
                "N'ai pas peur d'exécuter tes idées et de les représenter",
                "Sois patient et crois en toi",
                "Profites-en",
                "Ne dépend jamais sur les autres",
                "je ne sais pas",
                "Ta différence est ce qui te rend merveilleux"
            ],
            is_input: false
        }
    }
    else if (nb == 11) {
        return { 
            question: " Dernière question: " + answers[0] + ` qu'${tu("as-tu", "avez-vous")} pensé du quiz?`,
            points : [
                {'reveur' : 2},
                {'leader' : 2},
                {'hermite' : 2},
                {'survivant' : 2},
                {'egoiste' : 2},
                {'amoureux' : 2},
                {'robot' : 2}
            ],
            answers: [
                "Je veux savoir le résultat!",
                "Un bon 6/10 ",
                "Toujour intriguant d'avoir des nouvelles expériences",
                "Trop long ",
                "Ennuyant",
                "J'aime",
                "Je ne suis pas sure"
            ],
            is_input: false
        }
    }
}


function get_reponse(point_total:Personnalite) : PersonnaliteStr{
    return Object.entries(point_total).reduce((acc, curr) => acc[1] < curr[1] ? curr : acc)[0] as PersonnaliteStr
}



function App() {
    const [question_number, set_question_number] = useState(0);
    const [answers, set_answers] = useState<string[]>([])
    const [answers_nb, set_answers_nb] = useState<number[]>([])
    const [point_total, point_total_set] = useState<Personnalite>({
        hermite: 0,
        reveur: 0,
        amoureux: 0,
        leader: 0,
        survivant: 0,
        robot: 0,
        egoiste: 0,
    });
    
    return (
        <div className={styles.App}>
            {question_number < 12 ? 
                <Question 
                    {...get_question(question_number, answers, answers_nb)!} 
                    callback={(a : string, nb : number, points: Personnalite[] ) => {
                        if(points){
                            for(let p of Object.keys(points[nb])){
                                point_total[p as keyof typeof point_total]! += points[nb][p as keyof typeof Personnalite]
                            }
                            point_total_set(point_total)
                        }
                        console.log(point_total)

                        set_question_number(question_number+1);
                        set_answers(answers.concat([a]));
                        set_answers_nb(answers_nb.concat([nb]));
                    }} />
                :
               <Personnalite personnalite={get_reponse(point_total)!} />

            }
        </div>
    );
}

export default App;
