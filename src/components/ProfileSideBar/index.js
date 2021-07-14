import Box from '../Box';
import { AlurakutProfileSidebarMenuDefault } from '../../lib/AlurakutCommons';

function ProfileSideBar({ github, themeMode, setThemeMode }) {
  return (
    <Box as="aside">
      <img src={github.avatar_url} style={{ borderRadius: '8px' }} />
      <hr />
      <p>
        <a className="boxLink" href={github.html_url}>
          @{github.login}
        </a>
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault
        themeMode={themeMode}
        setThemeMode={setThemeMode}
      />
    </Box>
  );
}

export default ProfileSideBar;
