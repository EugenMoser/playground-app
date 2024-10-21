import { toast } from 'sonner';

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/app/components/ui/alert-dialog';
import CustomButton from '@/app/tutorial-supabase/components/CustomButton';
import { useHelpers } from '@/app/tutorial-supabase/hooks/useHelpers';
import { supabase } from '@/app/tutorial-supabase/lib/supabase';

// import { supabase } from '@/lib/supabase';

export default function Remove({ user, open, onClose }: any) {
  const { loading, setLoading } = useHelpers();

  const removeMember = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('team_members')
        .update({
          status: 'removed',
        })
        .eq('id', user.id)
        .select('*');

      if (data) {
        toast.success('User successfully removed from team.');
      }
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AlertDialog open={open}>
      <AlertDialogContent className='bg-white'>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            {user.name || 'Member'} will no longer be part of the team and
            will no longer have access to team-related content.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => onClose()}
            className='bg-red-500 text-white'
          >
            Cancel
          </AlertDialogCancel>
          <CustomButton
            {...{ label: 'Confirm', loading, onClick: removeMember }}
          />
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
