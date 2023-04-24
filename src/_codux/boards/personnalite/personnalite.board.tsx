import { createBoard } from '@wixc3/react-board';
import { Personnalite } from '../../../components/personnalite/personnalite';

export default createBoard({
    name: 'Personnalite',
    Board: () => <Personnalite personnalite="hermite"/>
});
