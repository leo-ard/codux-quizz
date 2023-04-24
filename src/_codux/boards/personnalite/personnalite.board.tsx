import { createBoard } from '@wixc3/react-board';
import { Personnalite } from '../../../components/personnalite/personnalite';
import '98.css'

export default createBoard({
    name: 'Personnalite',
    Board: () => <Personnalite personnalite="hermite" tu_vous="tu"/>
});
