export interface DatePickerModalHeaderProps {
    disableSafeTop?: boolean;
    saveLabel?: string;
    uppercase?: boolean;
    onDismiss: () => void;
    onSave: () => void;
    locale: string | undefined;
}
export default function DatePickerModalHeader(props: DatePickerModalHeaderProps): JSX.Element;
