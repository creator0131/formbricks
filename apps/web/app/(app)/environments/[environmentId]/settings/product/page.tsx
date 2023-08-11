import SettingsCard from "../SettingsCard";
import SettingsTitle from "../SettingsTitle";
import { DeleteProduct, EditProductName, EditWaitingTime } from "./editProduct";

export default function ProfileSettingsPage({ params }) {
  return (
    <div>
      <SettingsTitle title="Product Settings" />
      <SettingsCard title="Product Name" description="Change your products name.">
        <EditProductName environmentId={params.environmentId} />
      </SettingsCard>
      <SettingsCard
        title="Recontact Waiting Time (In app surveys)"
        description="Control how frequently users can be surveyed across all in app surveys.">
        <EditWaitingTime environmentId={params.environmentId} />
      </SettingsCard>
      <SettingsCard
        title="Delete Product"
        description="Delete product with all surveys, responses, people, actions and attributes. This cannot be undone.">
        <DeleteProduct environmentId={params.environmentId} />
      </SettingsCard>
    </div>
  );
}
