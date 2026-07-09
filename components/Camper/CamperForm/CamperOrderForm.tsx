'use client';
import Button from '@/components/UI/Button/Button';
import css from './CamperOrderForm.module.css';
import { useActionState } from 'react';
import clsx from 'clsx';
import { useMutation } from '@tanstack/react-query';
import { postBooking } from '@/lib/api/camperServices';

const NAME_REGEX = /^[a-zA-Zа-яА-ЯіІїЇєЄ\s]+$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormState = { errors: { name?: string; email?: string } } | null;

interface CamperOrderFormProps {
  camperId: string;
}

const CamperOrderForm = ({ camperId }: CamperOrderFormProps) => {
  const { mutate } = useMutation({ mutationFn: postBooking });

  const submitBooking = (_state: FormState, formData: FormData) => {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;

    const errors: { name?: string; email?: string } = {};

    if (!NAME_REGEX.test(name)) {
      errors.name = 'Please enter your name.';
    }
    if (!EMAIL_REGEX.test(email)) {
      errors.email = 'Please enter your email.';
    }

    if (Object.keys(errors).length > 0)
      return { errors, values: { name, email } };

    mutate({ body: { name, email }, camperId });

    return null;
  };

  const [state, formAction] = useActionState(submitBooking, null);

  return (
    <div className={css.camperOrderFormWrapper}>
      <div className={css.camperOrderFormHeader}>
        <h3 className={css.camperOrderFormTitle}>Book your camper-van now</h3>
        <p className={css.camperOrderFormDescription}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <form className={css.camperOrderForm} action={formAction} noValidate>
        <label className={css.formLabel}>
          <input
            type="text"
            name="name"
            className={clsx(
              css.camperOrderInput,
              state?.errors.name && css.error,
            )}
            placeholder="Name*"
            defaultValue={state?.values.name ?? ''}
          />
          <span
            className={clsx(
              css.formLabelText,
              state?.errors.name && css.errorLabel,
            )}
          >
            Name*
          </span>
          {state?.errors.name && (
            <span className={css.errorMessage}>{state.errors.name}</span>
          )}
        </label>

        <label className={css.formLabel}>
          <input
            type="email"
            name="email"
            className={clsx(
              css.camperOrderInput,
              state?.errors.email && css.error,
            )}
            placeholder="Email*"
            defaultValue={state?.values.email ?? ''}
          />
          <span
            className={clsx(
              css.formLabelText,
              state?.errors.email && css.errorLabel,
            )}
          >
            Email*
          </span>
          {state?.errors.email && (
            <span className={css.errorMessage}>{state.errors.email}</span>
          )}
        </label>

        <Button width={100} height={56} type="submit">
          Send
        </Button>
      </form>
    </div>
  );
};

export default CamperOrderForm;
