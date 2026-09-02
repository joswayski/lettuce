import { useEffect, useState } from "react";
import { Switcher } from "./components/Switcher";
import { Bento } from "./layouts/Bento";
import { Garden } from "./layouts/Garden";
import { Studio } from "./layouts/Studio";
import { Whisper } from "./layouts/Whisper";
import { applyLook, persistLook, type Look } from "./look";

export function App({ initialLook }: { initialLook: Look }) {
  const [look, setLook] = useState<Look>(initialLook);

  useEffect(() => {
    applyLook(look);
    persistLook(look);
  }, [look]);

  return (
    <>
      {look.layout === "garden" ? <Garden /> : null}
      {look.layout === "studio" ? <Studio /> : null}
      {look.layout === "bento" ? <Bento /> : null}
      {look.layout === "whisper" ? <Whisper /> : null}
      <Switcher look={look} onChange={setLook} />
    </>
  );
}
