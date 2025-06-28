
import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Phone } from 'lucide-react';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmergencyModal = ({ isOpen, onClose }: EmergencyModalProps) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <Phone className="h-6 w-6 text-red-600" />
            <AlertDialogTitle className="text-xl font-semibold text-red-600">
              Números de Emergência
            </AlertDialogTitle>
          </div>
          <AlertDialogDescription asChild>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-800 mb-2">Polícia Militar</h3>
                <p className="text-2xl font-bold text-red-600">190</p>
                <p className="text-sm text-red-700 mt-1">Para situações de emergência imediata</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-2">Central de Atendimento à Mulher</h3>
                <p className="text-2xl font-bold text-blue-600">180</p>
                <p className="text-sm text-blue-700 mt-1">24 horas por dia, todos os dias</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">DEAM - Polícia Civil</h3>
                <p className="text-xl font-bold text-purple-600">(21) 2332-9977</p>
                <p className="text-sm text-purple-700 mt-1">Delegacia Especializada de Atendimento à Mulher</p>
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onClose} className="bg-brand-600 hover:bg-brand-700">
            Fechar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default EmergencyModal;
