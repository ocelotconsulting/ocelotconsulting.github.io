import {ComponentPropsWithoutRef, Dispatch, SetStateAction} from 'react'
import Button from '@/components/Button'

export interface ContactButtonProps extends ComponentPropsWithoutRef<'button'> {
    setShowContact: Dispatch<SetStateAction<boolean>>
}

export default function ContactButton({setShowContact, children, ...props}: ContactButtonProps) {
    return (
        <Button
            as="button"
            onClick={() => setShowContact(true)}
            {...props}
        >
            {children}
        </Button>
    )
}