import { Settings2 } from 'lucide-react'
import Button from '../../components/ui/button'

function Settings() {
    return (
        <>
            <Button variant='outline'>
                <Settings2 className='mr-2 h-5' />
                Settings
            </Button>
        </>
    )
}

export default Settings
