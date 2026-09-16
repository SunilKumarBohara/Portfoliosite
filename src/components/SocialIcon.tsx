import React from 'react';
import { 
  Linkedin, 
  Facebook, 
  Instagram, 
  Twitter, 
  MessageSquare 
} from 'lucide-react';

interface SocialIconProps {
  name: string;
  className?: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ name, className = "w-4 h-4" }) => {
  switch (name) {
    case 'LinkedIn':
      return <Linkedin className={className} />;
    case 'Facebook':
      return <Facebook className={className} />;
    case 'Instagram':
      return <Instagram className={className} />;
    case 'X / Twitter':
    case 'X':
    case 'Twitter':
      return <Twitter className={className} />;
    case 'WhatsApp':
    default:
      return <MessageSquare className={className} />;
  }
};
