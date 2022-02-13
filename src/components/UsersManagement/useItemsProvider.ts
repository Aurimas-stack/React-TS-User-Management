import { useEffect, useState } from "react";

import { IItem } from "~/constants";
import getUserItems from "../../services/getUserItems";

const userItemsProvider = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>(null);
  const [items, setItems] = useState<Array<IItem>>([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const userItems: IItem[] = await getUserItems();
        setItems(userItems);
      } catch (error) {
        setErrorMessage(error.message);
      }

      setIsLoading(false);
    })();
  }, []);

  return {
    isLoading,
    errorMessage,
    items,
  };
};

export default userItemsProvider;
