import { useState } from 'react';
import Cover from './components/WeddingCover';
import Invitation from './components/InvitationSection';

export default function App() {
  const [revealed, setRevealed] = useState(false);
  const [coverGone, setCoverGone] = useState(false);

  return (
    <>
      {revealed && <Invitation />}
      {!coverGone && (
        <Cover
          onReveal={() => setRevealed(true)}
          onDone={() => setCoverGone(true)}
        />
      )}
    </>
  );
}