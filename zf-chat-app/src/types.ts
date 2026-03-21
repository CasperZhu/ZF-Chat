export interface Chat {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unreadCount: number;
  online?: boolean;
  isGroup?: boolean;
}

export interface Message {
  id: string;
  text?: string;
  image?: string;
  audio?: string;
  duration?: string;
  time: string;
  isOutgoing: boolean;
  status?: 'sent' | 'delivered' | 'read';
}

export interface Friend {
  id: string;
  name: string;
  avatar: string;
  status?: string;
  online?: boolean;
  initial: string;
}
