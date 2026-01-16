import { useState } from 'react';
import { Modal, Button, PasswordInput, Text, Stack } from '@mantine/core';
import { IconShieldLock, IconEye, IconEyeOff, IconX } from '@tabler/icons-react';
import './MyModal.css';
import { useNavigate } from 'react-router-dom';

export const MyModal = ({ opened, close, setIsAdmin }) => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const ADMIN_PASSWORD = 'admin123'; // ⚠️ később backendből!

const handleLogin = (e) => {
  e.preventDefault(); // form submit alap viselkedés letiltása
  if (password === ADMIN_PASSWORD) {
    setIsAdmin(true);
    close();
    setPassword('');
    navigate("/dashboard")
  } else {
    alert('Hibás admin jelszó');
  }
};


  return (
    <Modal
      opened={opened}
      onClose={close}
      centered
      withCloseButton={false}
      classNames={{ content: 'lux-glass-card' }}
    >
      <form onSubmit={handleLogin} style={{ position: 'relative' }}>
        <Stack spacing="md">
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div className="lux-glass-icon">
              <IconShieldLock size={22} />
            </div>
            <Text size="lg" fw={600}>
              Admin belépés
            </Text>
          </div>

          {/* Custom close icon */}
          <div
            className="lux-glass-iconn"
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              cursor: 'pointer',
            }}
            onClick={close}
          >
            <IconX size={20} />
          </div>

          <Text c="dimmed" size="sm">
            Kérlek add meg az admin jelszót a folytatáshoz
          </Text>
<PasswordInput
  label="Admin jelszó"
  placeholder="••••••••"
  value={password}
  className="password-input"
  onChange={(e) => setPassword(e.currentTarget.value)}
  visibilityToggleIcon={({ reveal }) =>
    reveal ? <IconEyeOff size={18} color="#b5aaff" /> : <IconEye size={18} color="#b5aaff" />
  }
/>


          <Button fullWidth mt="sm" type="submit">
            Belépés
          </Button>
        </Stack>
      </form>
    </Modal>
  );
};
