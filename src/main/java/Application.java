import domain.Menu;
import domain.MenuRepository;
import domain.Table;
import domain.TableRepository;
import view.InputView;
import view.OutputView;

import java.util.List;

public class Application {
    // TODO 구현 진행
    public static void main(String[] args) {
        final List<Table> tables = TableRepository.tables();
        final List<Menu> menus = MenuRepository.menus();

        int selectNo = InputView.showMain();

        while (selectNo != 3) {
            if (selectNo == 1) {
                OutputView.printTables(tables);
                int tableNumber = InputView.inputTableNumber();
            }
            selectNo = InputView.showMain();
        }
    }
}
