import { ReactNode } from "react";

export interface iCommentFormCreate {
  comment: string;
  service_rating: number;
}
export interface iCommentFormEdit {
  comment?: string;
  service_rating?: number;
}
export interface iCommentRequest extends iCommentFormCreate {
  name: string;
  serviceId: number;
  userId: number;
}
export interface iCommentResponse extends iCommentRequest {
  id: number;
}

export interface iServiceFormCreate {
  kind_of_service: string;
  description: string;
}
export interface iServiceFormEdit {
  kind_of_service?: string;
  description?: string;
}
export interface iServiceRequest extends iServiceFormCreate {
  userId: number;
  service_provider: string;
  service_provider_avatar?: string;
  phone_number?: string;
}
export interface iServiceResponse extends iServiceRequest {
  id: number;
  comments: iCommentResponse[];
}

export interface iServiceContext {
  services: [] | iServiceResponse[];
  setServices: React.Dispatch<React.SetStateAction<[] | iServiceResponse[]>>;
  filteredServices: [] | iServiceResponse[];
  kindOfServices: Array<string>;
  setKindOfService: React.Dispatch<React.SetStateAction<string>>;
  isClosing: boolean;
  openModal: boolean;
  closeModal: () => void;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  typeModal: string;
  setTypeModal: React.Dispatch<React.SetStateAction<string>>;
}

export interface iServiceProviderProps {
  children: ReactNode;
}
