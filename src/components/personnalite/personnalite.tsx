import styles from './personnalite.module.scss';
import classNames from 'classnames';

import img_hermite from '../../assets/para_hermite.jpg';
import img_reveur from '../../assets/para_reveur.jpg';
import img_amoureux from '../../assets/para_amoureux.jpg';
import img_leader from '../../assets/para_leader.jpg';
import img_survivant from '../../assets/para_survivant.jpg';
import img_robot from '../../assets/para_robot.jpg';
import img_egoiste from '../../assets/para_egoiste.jpg';

let img_personnalite = {
    hermite: img_hermite,
    reveur: img_reveur,
    amoureux: img_amoureux,
    leader: img_leader,
    survivant: img_survivant,
    robot: img_robot,
    egoiste: img_egoiste,
};

export interface Personnalite {
    hermite?: number;
    reveur?: number;
    amoureux?: number;
    leader?: number;
    survivant?: number;
    robot?: number;
    egoiste?: number;
}

export type PersonnaliteStr =
    | 'leader'
    | 'hermite'
    | 'egoiste'
    | 'reveur'
    | 'amoureux'
    | 'survivant'
    | 'robot';

export interface PersonnaliteProps {
    className?: string;
    personnalite: string;
    tu_vous: 'tu' | 'vous';
}

let nom = {
    hermite: "L'hermite",
    reveur: 'Le reveur',
    amoureux: "L'amoureux",
    leader: 'Le leader',
    survivant: 'Le survivant',
    robot: 'Le robot',
    egoiste: "L'égoiste",
};

let textes_tu = {
    hermite: `Désillusionné, déçu ou simplement dépassé par la pression constante de la performance. Tu te concentres désormais sur la vie, sur l'être. Tu ne te soucies pas d'une société de désir car tu sais qu'elle mène à la perte et au vide. Jour après jour, une minute à la fois, tu commences à connaître les cycles en regardant les autres. Tu réalises à quel point la comparaison des personnes et des personnalités est un moyen de faciliter notre esprit dans notre recherche d'une identité. Ce que tu es change avec chaque relation et chaque expérience, et la façon dont tu es blessé affectera la façon dont tu blesses les autres. C'est pourquoi tu préfères t'isoler le plus possible pour le moment. En prenant soin de toi, tu prends soin des autres. Cependant, tu dois savoir que tu n'es pas un fardeau et que tu peux compter sur les autres. Bien que tu rêves d'harmonie entre tous les environnements la nuit, le jour, tu fais en sorte de maintenir cette harmonie en toi-même et dans ton propre petit monde. En t'inspirant spirituellement par tes actions, tu deviens, sans même le savoir, une source d'inspiration. Tu atteins ton objectif d'être dans le présent.`,
    reveur: `La réflexion est ce qui te définit. Certains peuvent penser que tu as perdu la volonté de réussir, mais c'est en fait la quête profonde de faire quelque chose de significatif qui te fige dans cet état abstrait. En quête d'expériences, tu te retrouves dans les endroits les plus aléatoires et échanges des connaissances avec certaines des entités les plus intéressantes. Puisque poser des questions est ton passe-temps, le dogme te effraie de la manière la plus mesquine qui soit. Tu aimes demander pourquoi à une question de oui ou de non. N'oublie pas de ne jamais arrêter ce qui te fait sentir vivant. Pour toi, vivre signifie transformer, créer et idéaliser l'univers qui t'entoure. Le fait de vivre trop dans ta tête t'a parfois détaché de ce monde. Tu dois savoir comment utiliser ta créativité débordante pour faire de tes rêves une réalité.`,
    amoureux: `Ce qui est extraordinaire chez toi, c'est la façon dont tu te soucies des autres. Aussi bouleversantes que puissent être les émotions, tu te battras pour ce qui te semble juste. Ton but est d'aimer et d'être aimé, ce qui est à la fois une bénédiction et une malédiction. Mais tu penses qu'il vaut mieux vivre l'amour et être vulnérable que de ne jamais le vivre. Aussi forts que soient les sentiments qui t'animent, tu regrettes parfois de ne pas être né apathique. Ne crains rien, car c'est un cadeau d'être sensible. La façon dont tu peux t'exprimer et communiquer avec les autres, et pas seulement par les mots, leur permet de se sentir moins seuls. La façon dont tu te connectes au monde, comme s'il était fait pour toi, te fera expérimenter tous les niveaux de fréquence, de couleurs et d'émotions qui existent. N'oublie pas de ne pas te perdre dans cette mer d'émotions, à la recherche d'une oasis que tu as idéalisée.`,
    leader: `Il y a en toi une force de foudre qui te pousse à agir. Parfois impulsif, c'est ton charisme et ta vivacité d'esprit qui suscitent l'admiration des gens. Commencent par quelques idées pour l'avenir, l'idéologie que tu incarnes te donne de la crédibilité. Ta confiance en toi ne semble pas pouvoir être feinte. Tu as ce pouvoir d'unir et de créer une communauté pour quelque chose de plus grand que toi. Selon toi, la fin justifie les moyens, mais avec une tête aussi grande que le ciel, tu oublies parfois ce qui t'a poussé à agir en premier lieu. Après tout, en tant que leader, tu as ce destin de devenir grandiose, de te transformer en grand héros ou en grand vilain.`,
    survivant: `D'autres passent le temps en regardant les étoiles et en s'interrogeant. Tu as mieux à faire que de rêver. Perdre son temps comme ça n'aide personne en temps de crise. Nous avons besoin de nourriture, de sommeil et de sécurité qui ne viennent pas toujours naturellement dans cette société. Tu utilises toute ton énergie pour prendre soin et protéger ton clan et par-dessus tout toi-même. La morale et la foi ne sont pas fiables dans la vie, tu prends ce que tu peux et tu sais que les autres le feront aussi. Tu penses que la confiance est réservée aux faibles, même si tu es très loyal. En fin de compte, tu te retrouveras au sommet, je l'espère, mais fatigué de ce que tu as travaillé si dur à obtenir. Essaye de ne pas garder cette mentalité de survie quand ce n'est pas nécessaire en oubliant de vivre. Que tu rationalises ta richesse ou que tu en sois reconnaissant, cet état de transition prendra fin lorsque tu regarderas les étoiles et te demanderas ce que les autres ont vu.`,
    robot: `Perdu et désorienté, tu masques ces problèmes sans importance en te distrayant avec un objectif, ce qui n'est pas mal tout en dépendant de l'objectif. Tu te retrouves à travailler pour un idéal qui ne se réalisera peut-être jamais parce que sa poursuite est beaucoup plus amusante. Derrière des lunettes rationnelles et non-problématiques, tout en faisant ta routine habituelle, tu te demandes rarement, mais parfois : le but de la vie est-il censé être ce que je peux apporter à ce monde ? Quel type de société est-ce que j'aide à réaliser ? Après tout, tu paies tes impôts, tu donnes même à des œuvres de charité et donc, tu dors sur tes deux oreilles. Tu es un parfait citoyen, sois fier d'être l'enfant chéri.`,
    egoiste: `Dans ce monde cruel où tu es né, personne ne peut comprendre la douleur que tu as endurée, peut-être un amant, mais non. Tu ne te soucies pas des autres, parce que les autres ne se soucient pas de toi. Ce qui compte pour toi, c'est l'apparence. Tu penses que ta façon de penser reflète la façon dont les autres pensent et la façon dont ils te perçoivent. En fermant les yeux, tu préfères imaginer un monde où la conscience est un choix. Guidé par la honte, tu crains la responsabilité qui pourrait te libérer. Au lieu de cela, tu utilises ton énergie pour masquer tes insécurités que tu imposes maintenant aux autres. Plus tu te mens à toi-même, plus la spirale que tu crées est grande et plus il est difficile de l'arrêter. N'aie pas peur d'être différent, de t'accepter et de t'entourer de personnes qui te sont importantes, peu importe leur statut. L'empathie peut s'apprendre si tu veux vraiment te rapprocher des autres.`,
};

let textes_vous = {
    hermite: `Désillusionnés, déçus ou simplement dépassés par la pression constante de la performance. Vous vous concentrez désormais sur la vie, sur l'être. Vous ne vous souciez pas d'une société de désir car vous savez qu'elle mène à la perte et au vide. Jour après jour, une minute à la fois, vous commencez à connaître les cycles en regardant les autres. Vous réalisez à quel point la comparaison des personnes et des personnalités est un moyen de faciliter notre esprit dans notre recherche d'une identité. Ce que vous êtes change avec chaque relation et chaque expérience, et la façon dont vous êtes blessé affectera la façon dont vous blessez les autres. C'est pourquoi vous préférez vous isoler le plus possible pour le moment. En prenant soin de vous, vous prenez soin des autres. Cependant, vous devez savoir que vous n'êtes pas un fardeau et que vous pouvez compter sur les autres. Bien que vous rêviez d'harmonie entre tous les environnements la nuit, le jour, vous faites en sorte de maintenir cette harmonie en vous-même et dans votre propre petit monde. En vous inspirant spirituellement par vos actions, vous devenez, sans même le savoir, une source d'inspiration. Vous atteignez votre objectif d'être dans le présent.`,
    reveur: `La réflexion est ce qui vous définit. Certains peuvent penser que vous avez perdu la volonté de réussir, mais c'est en fait la quête profonde de faire quelque chose de significatif qui vous fige dans cet état abstrait. En quête d'expériences, vous vous retrouvez dans les endroits les plus aléatoires et échangez des connaissances avec certaines des entités les plus intéressantes. Puisque poser des questions est votre passe-temps, le dogme vous effraie de la manière la plus mesquine qui soit. Vous aimez demander pourquoi à une question de oui ou de non. N'oubliez pas de ne jamais arrêter ce qui vous fait sentir vivant. Pour vous, vivre signifie transformer, créer et idéaliser l'univers qui vous entoure. Le fait de vivre trop dans votre tête vous a parfois détaché de ce monde. Vous devez savoir comment utiliser votre créativité débordante pour faire de vos rêves une réalité.`,
    amoureux: `Ce qui est extraordinaire chez vous, c'est la façon dont vous vous souciez des autres. Aussi bouleversantes que puissent être les émotions, vous vous battrez pour ce qui vous semble juste. Votre but est d'aimer et d'être aimé, ce qui est à la fois une bénédiction et une malédiction. Mais vous pensez qu'il vaut mieux vivre l'amour et être vulnérable que de ne jamais le vivre. Aussi forts que soient les sentiments qui vous animent, vous regrettez parfois de ne pas être né apathique. Ne craignez rien, car c'est un cadeau d'être sensible. La façon dont vous pouvez vous exprimer et communiquer avec les autres, et pas seulement par les mots, leur permet de se sentir moins seuls. La façon dont vous vous connectez au monde, comme s'il était fait pour vous, vous fera expérimenter tous les niveaux de fréquence, de couleurs et d'émotions qui existent. N'oubliez pas de ne pas vous perdre dans cette mer d'émotions, à la recherche d'une oasis que vous avez idéalisée.`,
    leader: `Il y a en vous une force de foudre qui vous pousse à agir. Parfois impulsif, c'est votre charisme et votre vivacité d'esprit qui suscitent l'admiration des gens. Commençant par quelques idées pour l'avenir, l'idéologie que vous incarnez vous donne de la crédibilité. Votre confiance en vous ne semble pas pouvoir être feinte. Vous avez ce pouvoir d'unir et de créer une communauté pour quelque chose de plus grand que vous. Selon vous, la fin justifie les moyens, mais avec une tête aussi grande que le ciel, vous oubliez parfois ce qui vous a poussé à agir en premier lieu. après tout, en tant que leader, vous avez ce destin de devenir grandiose, de vous transformer en grand héros ou en grand vilain.`,
    survivant: `D'autres passent le temps en regardant les étoiles et en s'interrogeant. Vous avez mieux à faire que de rêver. Perdre son temps comme ça n'aide personne en temps de crise. Nous avons besoin de nourriture, de sommeil et de sécurité qui ne viennent pas toujours naturellement dans cette société. Vous utilisez toute votre énergie pour prendre soin et protéger votre clan et par-dessus tout vous-même. La morale et la foi ne sont pas fiables dans la vie, vous prenez ce que vous pouvez et vous savez que les autres le feront aussi. Vous pensez que la confiance est réservée aux faibles, même si vous êtes très loyal. En fin de compte, vous vous retrouverez au sommet, je l'espère, mais fatigué de ce que vous avez travaillé si dur à obtenir. Essayez de ne pas garder cette mentalité de survie quand ce n'est pas nécessaire en oubliant de vivre. Que vous rationalisiez votre richesse ou que vous en soyez reconnaissant, cet état de transition prendra fin lorsque vous regarderez les étoiles et vous demanderez ce que les autres ont vu.`,
    robot: `Perdu et désorienté, vous masquez ces problèmes sans importance en vous distrayant avec un objectif, ce qui n'est pas mal tout en dépendant de l'objectif. Vous vous retrouvez à travailler pour un idéal qui ne se réalisera peut-être jamais parce que sa poursuite est beaucoup plus amusante. Derrière des lunettes rationnelles et non-problématiques, tout en faisant votre routine habituelle, vous vous demandez rarement, mais parfois : le but de la vie est-il censé être ce que je peux apporter à ce monde ? Quel type de société est-ce que j'aide à réaliser ? Après tout, vous payez vos impôts, vous donnez même à des œuvres de charité et donc, vous dormez sur vos deux oreilles. Vous êtes un parfait citoyen, soyez fier d'être l'enfant chéri. `,
    egoiste: `Dans ce monde cruel où vous êtes né, personne ne peut comprendre la douleur que vous avez endurée, peut-être un amant, mais non. Vous ne vous souciez pas des autres, parce que les autres ne se soucient pas de vous. Ce qui compte pour vous, c'est l'apparence. Vous pensez que votre façon de penser reflète la façon dont les autres pensent et la façon dont ils vous perçoivent. En fermant les yeux, vous préférez imaginer un monde où la conscience est un choix. Guidé par la honte, vous craignez la responsabilité qui pourrait vous libérer. Au lieu de cela, vous utilisez votre énergie pour masquer vos insécurités que vous imposez maintenant aux autres. Plus vous vous mentez à vous-même, plus la spirale que vous créez est grande et plus il est difficile de l'arrêter. N'ayez pas peur d'être différent, de vous accepter et de vous entourer de personnes qui vous sont importantes, peu importe leur statut. L'empathie peut s'apprendre si vous voulez vraiment vous rapprocher des autres.`,
};

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-personnalites-and-templates
 */
export const Personnalite = ({ className, personnalite, tu_vous }: PersonnaliteProps) => {
    let textes = tu_vous == 'tu' ? textes_tu : textes_vous;
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.personalite}>
                <div
                    style={{
                        backgroundImage:
                            'url(' +
                            img_personnalite[personnalite as keyof typeof img_personnalite] +
                            ')',
                    }}
                    className={styles['image-div']}
                >
                    <h3 className={styles['personnalite-h3']}>
                        {nom[personnalite as keyof typeof nom]}
                    </h3>
                </div>
                <p className={styles['personnalite-text']}>
                    {textes[personnalite as keyof typeof textes]}
                </p>
            </div>
        </div>
    );
};
