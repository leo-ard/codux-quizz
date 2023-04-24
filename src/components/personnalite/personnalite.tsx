import styles from './personnalite.module.scss';
import classNames from 'classnames';

export interface Personnalite {
    hermite?: number,
    reveur?: number,
    amoureux?: number,
    leader?: number,
    survivant?: number,
    robot?: number,
    egoiste?: number,
}

export type PersonnaliteStr = "leader" | "hermite" | "egoiste" | "reveur" | "amoureux" | "survivant" | "robot";

export interface PersonnaliteProps {
    className?: string;
    personnalite: string;
}

let nom = {
    'hermite': "L'hermite",
    'reveur': 'Le reveur',
    'amoureux': "L'amoureux",
    'leader': 'Le leader',
    'survivant': 'Le survivant',
    'robot': 'Le robot',
    'egoiste': "L'égoiste",
};

let textes = {
    'hermite': `
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
    
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

    `,
    'reveur': `
    
    `,
    'amoureux': `
    
    `,
    'leader': `
    
    `,
    'survivant': `
    
    `,
    'robot': `
    
    `,
    'egoiste': `
    
    `,
};

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-personnalites-and-templates
 */
export const Personnalite = ({ className, personnalite }: PersonnaliteProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.personalite}>
                <h1>{nom[personnalite as keyof typeof nom]}</h1>
                <p>{textes[personnalite as keyof typeof textes]}</p>
            </div>
        </div>
    );
};
