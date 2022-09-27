import { LinkProps } from "../types/types";
import { Targets } from "@locator/shared";
import { useOptions } from "../functions/optionsStore";
import { LinkOptions } from "./LinkOptions";
import { AdapterId } from "../consts";

export function WelcomeScreen(props: {
  originalLinkProps: LinkProps | null;
  targets: Targets;
  onClose: () => void;
  adapterId?: AdapterId;
}) {
  const options = useOptions();

  return (
    <div class="bg-white p-4 rounded-xl border-2 border-red-500 shadow-xl cursor-auto pointer-events-auto z-10 max-w-xl">
      <div class="mt-2 mb-4">
        <h1 class="text-2xl font-bold">Welcome to Locator!</h1>
        <span class="text-sm">
          Before using Locator, let's try links in your project and fix them if
          needed.
        </span>
      </div>
      <LinkOptions
        linkProps={props.originalLinkProps}
        adapterId={props.adapterId}
        targets={props.targets}
      />

      <div class="mt-4 flex gap-2 justify-between items-center">
        <div class="text-sm text-gray-600" />
        <div>
          <button
            onClick={() => {
              options.setOptions({ welcomeScreenDismissed: true });
              props.onClose();
            }}
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
