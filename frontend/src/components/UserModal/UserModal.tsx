import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Box,
  Divider,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { User } from "../../types/user";

interface UserModalProps {
  user: User | null;
  open: boolean;
  onClose: () => void;
}

export const UserModal: React.FC<UserModalProps> = ({
  user,
  open,
  onClose,
}) => {
  if (!user) return null;

  const formatHireDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const InfoRow: React.FC<{ label: string; value: string }> = ({
    label,
    value,
  }) => (
    <Box mb={2}>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        {label}:
      </Typography>
      <Typography variant="body1">{value}</Typography>
    </Box>
  );

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" component="h2">
            {user.name}
          </Typography>
          <IconButton onClick={onClose} size="small">
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent>
        <Box sx={{ mt: 1 }}>
          <InfoRow label="Телефон" value={user.phone} />

          <InfoRow label="Почта" value={user.email} />

          <InfoRow label="Дата приема" value={formatHireDate(user.hire_date)} />

          <InfoRow label="Должность" value={user.position_name} />

          <InfoRow label="Подразделение" value={user.department} />

          <Divider sx={{ my: 2 }} />

          <Typography variant="body2" color="text.secondary" gutterBottom>
            Дополнительная информация:
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.6, mb: 2 }}>
            Разработчики используют текст в качестве заполнителя места страницы.
            Разработчики используют текст в качестве заполнителя места страницы.
          </Typography>

          <InfoRow label="Адрес" value={user.address} />
        </Box>
      </DialogContent>
    </Dialog>
  );
};
