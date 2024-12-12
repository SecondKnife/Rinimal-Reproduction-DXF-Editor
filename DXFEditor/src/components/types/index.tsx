export interface IButtonProps {
  title: string | undefined;
  onClick?: () => void;
  style?: any;
  link?: string;
  full?: boolean;
  size?: "small" | "medium" | "lager" | "extra";
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  bg?: "danger" | "primary" | "secondary";
  classNameTitle?: string;
  icon?: any;
  checked?:boolean
}
export interface IToolbar {
  handleFileUpload:(event:any) => void
}