import { useEffect } from "react";
import { toast } from "sonner";

interface TostMessage {
  errors?: string[] | Error[] | unknown[];
  successes?: string[] | Success[];
}

interface Success {
  message?: string;
}

const useToastMessage = ({
  errors = [],
  successes = [],
}: TostMessage): void => {
  useEffect(() => {
    errors.some((error) => {
      if (typeof error === "string" || error instanceof Error)
        toast.error(error.toString());
      return false;
    });
  }, [errors]);

  useEffect(() => {
    successes.some((success: Success | string) => {
      if (typeof success === "string") toast.success(success);

      if (typeof success === "object" && success?.message)
        toast.success(success.message);
      return false;
    });
  }, [successes]);
};

export default useToastMessage;
