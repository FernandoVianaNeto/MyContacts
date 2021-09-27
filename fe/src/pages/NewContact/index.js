import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

export default function NewContact() {
  return (
    <>
      <PageHeader
        title="Novo contato"
      />

      <Input placeholder="Nome" />
      <Select>
        <option>Instagram</option>
      </Select>

      <Button type="button">Salvar alterações</Button>
    </>
  );
}
